function createElement(data)
{
    let paragraphe = document.createElement('p');
    paragraphe.textContent = data;
    document.body.appendChild(paragraphe);
}

function queryWikipedia(callback)
{
    let xhr = new XMLHttpRequest();
    xhr.open(
        'GET', 'https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*'
    );
    xhr.onload = function()
    {
        if (xhr.status === 200)
        {
            let response = JSON.parse(xhr.responseText);
            let pages = response.query.pages;
            let pageId = Object.keys(pages)[0];
            let extract = pages[pageId].extract;
            callback(extract);
        }
    }

    xhr.send();
}

queryWikipedia(createElement);
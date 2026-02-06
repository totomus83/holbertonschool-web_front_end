function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size + 'px';
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}

function main() {
  // Paragraphe Guest
  const guestParagraph = document.createElement('p');
  guestParagraph.textContent =
    "You're browsing as a guest. Pages you view in this window won't appear in the browser history and they won't leave other traces, like cookies, on the computer after you close all open guest windows. Any files you download will be preserved, however.";
  document.body.appendChild(guestParagraph);

  // Closures / thèmes
  const spooky = changeMode(9, 'bold', 'uppercase', 'pink', 'green');
  const darkMode = changeMode(12, 'bold', 'capitalize', 'black', 'white');
  const screamMode = changeMode(12, 'normal', 'lowercase', 'white', 'black');

  // Paragraphe principal
  const paragraph = document.createElement('p');
  paragraph.textContent = 'Welcome Holberton!';
  document.body.appendChild(paragraph);

  // Boutons de thème
  const spookyButton = document.createElement('button');
  spookyButton.textContent = 'Spooky';
  spookyButton.onclick = spooky;

  const darkButton = document.createElement('button');
  darkButton.textContent = 'Dark mode';
  darkButton.onclick = darkMode;

  const screamButton = document.createElement('button');
  screamButton.textContent = 'Scream mode';
  screamButton.onclick = screamMode;

  document.body.appendChild(spookyButton);
  document.body.appendChild(darkButton);
  document.body.appendChild(screamButton);
}

main();

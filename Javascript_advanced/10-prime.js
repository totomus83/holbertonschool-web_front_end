function countPrimeNumbers()
{
    let nbPrimeNumber = 0;
    let nbDiv;
    for(let i = 2; i <= 100; i += 1)
    {
        nbDiv = 0;
        for(let j = 1; j <= i; j++)
        {
            if (i % j === 0) {
                nbDiv++;
            }
        }
        if(nbDiv === 2)
            nbPrimeNumber++;
    }
    return nbPrimeNumber;
}

const startTime = performance.now();
for(let repeat = 0; repeat < 100; repeat++)
    countPrimeNumbers();
const endTime = performance.now();
const ExecuteTime = endTime - startTime;

console.log("Execution time of calculating prime numbers 100 times was " + ExecuteTime + " milliseconds.");
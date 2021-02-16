// Prime numbers and timing execution
function countPrimeNumbers() {
    let count = 0;
    for (let i = 2; i <= 100; i++) {
        let prime = true;
        for (let j = 2; j < i; j++) {
            if (i % j === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            count++;
        }
    }
    return count;
}

const start = performance.now();

countPrimeNumbers();

const end = performance.now();

const timeUsed = end - start;

console.log(
    `Execution time of printing countPrimeNumbers was ${timeUsed} milliseconds.`
);

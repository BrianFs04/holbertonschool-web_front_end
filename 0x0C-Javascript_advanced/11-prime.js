// Changing stack order using setTimeout
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

setTimeout(() => {
    for (let i = 1; i <= 100; i++) {
        console.log(countPrimeNumbers());
    }
}, 0);

const end = performance.now();

const timeUsed = end - start;

console.log(
    `Execution time of calculating prime numbers 100 times was ${timeUsed} milliseconds.`
);

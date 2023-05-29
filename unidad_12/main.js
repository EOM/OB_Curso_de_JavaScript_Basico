function fibonacciSequence(num) {
    let sequence = [];
    if (num >= 1) {
        sequence.push(1);
    }
    if (num >= 2) {
        sequence.push(1);
    }
    for (let i = 2; i < num; i++) {
        const nextNumber = sequence[i - 1] + sequence[i - 2];
        sequence.push(nextNumber);
    }
    return sequence;
}

const num = 6;
const result = fibonacciSequence(num);
console.log(result);

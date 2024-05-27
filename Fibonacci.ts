let firstNumber: number = 0;
let secondNumber: number = 1;
const limit: number = 100;

console.log(`Fibonacci sequence up to ${limit}`);

while (firstNumber <= limit) {
    console.log(firstNumber);
    
    let nextNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = nextNumber;
}

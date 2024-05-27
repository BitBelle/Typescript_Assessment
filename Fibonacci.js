var firstNumber = 0;
var secondNumber = 1;
var limit = 100;
console.log("Fibonacci sequence up to ".concat(limit));
while (firstNumber <= limit) {
    console.log(firstNumber);
    var nextNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = nextNumber;
}

var i;
for (i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("".concat(i, " FizzBuzz"));
    }
    else if (i % 3 === 0) {
        console.log("".concat(i, " Fizz"));
    }
    else if (i % 5 === 0) {
        console.log("".concat(i, " Buzz"));
    }
}
function reverseInteger(num: number): number {
    let reversed = 0;
    let remainder: number;

    if (num < 0) {
        num = Math.abs(num);
    }

    while (num > 0) {
        remainder = num % 10;
        reversed = reversed * 10 + remainder;
        num = Math.floor(num / 10);
    }

    if (num < 0) {
        return -reversed;
    }

    return reversed;
}

console.log(reverseInteger(30));
console.log(reverseInteger(-25));
console.log(reverseInteger(75)); 
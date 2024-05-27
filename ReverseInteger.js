function reverseInteger(num) {
    var reversed = 0;
    var remainder;
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

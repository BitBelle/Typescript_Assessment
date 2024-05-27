function countVowels(sentence) {
    var vowels = ['a', 'e', 'i', 'o', 'u'];
    var count = 0;
    for (var i = 0; i <= sentence.length; i++) {
        if (vowels.includes(sentence[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}
console.log(countVowels("Hello World"));

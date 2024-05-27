function capitalizeWords(sentence) {
    return sentence.toLowerCase()
        .split(' ')
        .map(function (word) { return word.charAt(0).toUpperCase() + word.slice(1); })
        .join(' ');
}
console.log(capitalizeWords("i love programming"));
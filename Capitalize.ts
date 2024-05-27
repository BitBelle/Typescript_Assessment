function capitalizeWords(sentence: string): string {
    return sentence.toLowerCase()
                   .split(' ')
                   .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                   .join(' ');
}
console.log(capitalizeWords("i love programming")); 
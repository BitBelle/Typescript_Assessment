function countVowels(sentence: string): number {
    let vowels: string[] = ['a', 'e', 'i', 'o', 'u'];
    let count: number = 0;
    for (let i: number = 0; i <= sentence.length; i++) {
        if (vowels.includes(sentence[i].toLowerCase())) {
            count++;
        }
    }
    return count;
}

console.log(countVowels("Hello World")); 
function naiveSearch(statement, word) {
    // let count = 0;
    // let wordLength = word.length;
    // let newWord;
    // let i = 0;
    // while (i < statement.length) {
    //     if (statement[i] === word[0]) {
    //         newWord = statement.slice(i, wordLength)
    //         console.log(newWord)
    //         if (newWord==word) {
    //             count+=1
    //         } 
    //     }
    //     console.log(newWord)
    //     i++; 
    // }
    
    let count = 0;
    let newWord =""
    for (let i = 0; i<statement.length; i++){
        for (let j = 0; j < word.length; j++){
            if (statement[i + j] !== word[j]) {
                break
            }
            if (j == (word.length - 1)) {
                count++
            }
                
        }
    }
    return count
    
}
let r = naiveSearch("Hello love you ","love you    ");
console.log(r);
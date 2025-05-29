/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function(words, x) {
    const result=words.map((word,index)=> word.includes(x) ? index:-1)
 .filter(index=>index !== -1)
return result
}


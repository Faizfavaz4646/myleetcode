/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
let reversedWord=s.split(" ").map(word=>word.split("").reverse().join("")).join(" ")
return reversedWord ;
};
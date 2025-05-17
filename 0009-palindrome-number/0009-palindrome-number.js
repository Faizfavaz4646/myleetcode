/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let str=x.toString();
    let reversedstr=str.split('').reverse().join('');
    return str===reversedstr;
    
};
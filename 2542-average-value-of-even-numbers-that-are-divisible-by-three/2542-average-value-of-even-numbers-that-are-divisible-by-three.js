/**
 * @param {number[]} nums
 * @return {number}
 */
var averageValue = function(nums) {
    let filtered=nums.filter(num=>num%2===0 && num%3==0)
    if(filtered.length===0) return 0;
    
    let sum = filtered.reduce((acc, val) => acc + val, 0);
    return Math.floor(sum / filtered.length);
    
};
console.log(averageValue([1,2,4,7,10]))
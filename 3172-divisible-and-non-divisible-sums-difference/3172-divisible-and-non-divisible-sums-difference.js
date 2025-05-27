/**
 * @param {number} n
 * @param {number} m
 * @return {number}
 */
var differenceOfSums = function(n, m) {
    let sum1 = 0; // not divisible by m
    let sum2 = 0; // divisible by m
    for(let i = 1;i<=n;i++){
        if(i % m===0){
            sum2 += i;
        }
        else{
            sum1 += i;
        }
    }
    return sum1 - sum2

    
};




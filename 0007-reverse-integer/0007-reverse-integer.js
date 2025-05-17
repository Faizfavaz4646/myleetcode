/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {


let y=parseInt(x.toString().split('').reverse().join('')) *Math.sign(x);
if (y<-(2**31) || y >(2**31)){
return 0;
}
return y;

}    
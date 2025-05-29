/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @return {number[]}
 */
var twoOutOfThree = function(nums1, nums2, nums3) {
    const allItems=[...new Set([...nums1, ...nums2, ...nums3])]
    const selected=allItems.filter(item=>{
        count=0
        if(nums1.includes(item)) count++
        if(nums2.includes(item)) count++
        if(nums3.includes(item)) count++
        return count >=2
    })
   return selected ;
    
};
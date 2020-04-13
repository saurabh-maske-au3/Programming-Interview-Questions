//How do you find the duplicate number on a given integer array?//

function findDuplicate(nums){
var result=[]
nums.forEach(function(num,index){
    // check if duplicate exist
    if(nums.indexOf(num,index+1)>-1){

        if(result.indexOf(num)===-1){
            result.push(num)
        }
        
    }
})
return result
}
console.log(findDuplicate([1,2,2,3,4,5,6,5]))//[2,5]
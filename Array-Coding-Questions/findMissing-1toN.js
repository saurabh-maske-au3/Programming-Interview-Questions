// Q-> How do you find the missing number in a given integer array of 1 to 100?
// Given an array of numbers from sorted or unsorted manner find missing number from the given array

// Approach 1- 1.1 Get the sum of all array elements as (n+1)*(n+2)/20
//               1.2 substract each element from sum you wil get the missing number

// // exactly one missing from array
function findMissing(array){
   

  let arrSum = ((array.length+1)*(array.length+2)/2)
 for(let i=0;i<array.length;i++){
     arrSum-=array[i];
    
 }
 return arrSum;

}
console.log('Missing Number is',findMissing([1,2,3,4,5,7,8,9,10]))

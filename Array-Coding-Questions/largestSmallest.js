//Q->How do you find the largest and smallest number in an unsorted integer array?
function largestSmallest(arr){
    arr.sort(function(a,b){return a-b})
   console.log('largest',arr[arr.length-1],'\n','smallest',arr[0])
}
largestSmallest([1,2,6,7,4,3])
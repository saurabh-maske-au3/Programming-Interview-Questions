//Q->How do you find all pairs of an integer array whose sum is equal to a given number?
// Approach 1:using two nested loop which iterate over each element in array
// complexity-time- O(N*N)

// function pairSum(arr,sum){
//     var result=[];
// for (let i=0;i<arr.length;i++){
//     for(let j=1;j<arr.length;j++){
//         if(arr[i]+arr[j]==sum){
//             result.push([arr[i],arr[j]])
//         }
//     }
// }
// return result;
// }
// console.log(pairSum([1,2,3,4,5,6,7],6))


// Approach 2: Using Sorting 
//Time Complexity - O(nlogn)
// Space Complexity- O(n)

function pairMatchingSum (arr, sum) {
    var start, end, tempSum;
  
    var i = 0 ;
    var j = arr.length - 1;
  
    // Create a new Object instance
    var s = {};
    var sortedArr = arr.sort();
  
    while (i !== j) {
      start = sortedArr[i];
      end = sortedArr[j];
      tempSum = start + end;
  
      if (tempSum === sum) {
        // Add matching pair to the Object. Object does not allow duplicate keys.
        s[start +'-'+ end] = true;
        i++;
        j--;
  
      } else if (tempSum > sum) {
        j--;
  
      } else {
        i++;
      }
    }
  
    console.log("Pairs matching the input sum in the given array without duplicates = ", Object.keys(s));
    
  
  }
pairMatchingSum([1,3,4,7,9,2],6)


//Approach 3: Using map datastructure
// Time complexity- O(n)

function findPairs(arr,sum){
    var map=[];
    var indexNum=[];
    for(let i=0;i<arr.length;i++){
        if(map[arr[i]]!=null)
        {
           var index=map[arr[i]];
           indexNum[0]=arr[index];
           indexNum[1]=arr[i];
           break; 
        }else{
            map[sum - arr[i]] = i; 
        }
    }
    return indexNum;
}
console.log('pairs uning map ',findPairs([10,20,10,40,50,60,70],50))
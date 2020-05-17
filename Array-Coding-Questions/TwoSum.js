// find the index of two numbers whose  sum matches with target sum
// Given nums = [2, 7, 11, 15], target = 9,

// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// Using object 
const TwoSum = (arr, target) => {
	let numObject = {};
	for (let i = 0; i < arr.length; i++) {
		let thisNum = arr[i];
		numObject[thisNum] = i;
	}
	for (var i = 0; i < arr.length; i++) {
		let diff = target - arr[i];
		if (numObject.hasOwnProperty(diff) && numObject[diff] !== i) {
			return [i, numObject[diff]];
		}
	}
}
console.log(TwoSum([2, 7, 11, 15], 9));

// using map 
var twoSum = function(nums, target) {
    var map = new Map();
 
   for(var i = 0; i<nums.length; i++) {
       var num = nums[i];
       if(map.get(num) === undefined) map.set(target-num, i);
       else return [map.get(num), i];
   }
         
     
 }
 console.log(twoSum([2,6,7,3,4,9,0,7],9))
// The maximum sum subarray problem consists in finding the maximum sum (return sum only) of 
// a contiguous subsequence in an array or list of integers:

// Easy case is when the list is made up of only positive numbers and the maximum sum is the sum of the whole array. 
// If the list is made up of only negative numbers, return 0 instead.

// Empty list is considered to have zero greatest sum. 
// Note that the empty list or array is also a valid sublist/subarray.

var maxSequence = function(arr) {

  let currentSum = 0;

  let maxSum = 0;

  for (ele of arr) {

    currentSum = currentSum + ele;

    if (ele > currentSum) {
      currentSum = ele;
    }
    if (currentSum > maxSum) {
      maxSum = currentSum;
    }
  }
  return maxSum;
}

// Test Cases
maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

maxSequence([ 5, -23, -7, 17, -44, -29, -38, 40, -37, -20, -47, 2, 35, -14, -34, 44 ]);
  //expected 44, instead got 37
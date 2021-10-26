// Given an array of integers, find the one that appears an odd number of times.
// There will always be only one integer that appears an odd number of times.

// [7] should return 7, because it occurs 1 time (which is odd).
// [0] should return 0, because it occurs 1 time (which is odd).
// [1,1,2] should return 2, because it occurs 1 time (which is odd).
// [0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
// [1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).

function findOdd(A) {

  let integerObj = {};
  let oddCountIntegerString;

  //Create an object with the number of occurrences of each integer
  A.forEach((integer) => {
    integerObj[integer] ? integerObj[integer]++ : integerObj[integer] = 1;
  });

  //Set the return value to the one with the odd count
  Object.keys(integerObj).forEach((integer) => {
    if (integerObj[integer] % 2 !== 0) {
      oddCountIntegerString = integer;
    }
  });

  //Convert the integer stored as string to integer
  return parseInt(oddCountIntegerString);
}

//Test cases
console.log(findOdd([7])); //Return 7
console.log(findOdd([0])); //Return 0
console.log(findOdd([1,1,2])); //Return 2
console.log(findOdd([0,1,0,1,0])); //Return 0
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])); //Return

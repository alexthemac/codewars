// Write an algorithm that takes an array and moves all of the zeros to the end, 
// preserving the order of the other elements.

var moveZeros = function (arr) {
  let returnArray = arr.filter(element => element !== 0);
  const numberOf0s = arr.length - returnArray.length;

  for (let i = 0; i < numberOf0s; i++) {
    returnArray.push(0);
  }
  
  return returnArray;
}

// Test cases:
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
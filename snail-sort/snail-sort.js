// Given an n x n array, return the array elements arranged from 
// outermost elements to the middle element, traveling clockwise.

snail = function(array) {

  let newArray = [];

  //If statement to account for array = [[]] case
  if (array[0].length) {
    for (let rotation = 0; rotation < array.length / 2; rotation++) {
      //top horizontal row
      for (let topIndex = rotation; topIndex < array.length - 1 - rotation; topIndex++) {
        newArray.push(array[rotation][topIndex]);
      }
      //right vertical row
      for (let rightIndex = rotation; rightIndex < array.length - 1 - rotation; rightIndex++) {
        newArray.push(array[rightIndex][array.length - 1 - rotation]);
      }
      //bottom horizontal row
      for (let bottomIndex = array.length - 1 - rotation; bottomIndex > rotation; bottomIndex--) {
        newArray.push(array[array.length - 1 - rotation][bottomIndex]);
      }
      //left vertical row
      for (let leftIndex = array.length - 1 - rotation; leftIndex > rotation; leftIndex--) {
        newArray.push(array[leftIndex][rotation]);
      }
    }
  
    //Add the center arrays center index value for odd length arrays. The for loop above works for even length arrays
    if (array.length % 2 !== 0) {
      newArray.push(array[(array.length - 1) / 2][(array.length - 1) / 2]);
    }
  }

  return newArray;
}

// Test cases

// array = [[]]

// snail(array) //Result:[]

// array = [[1,2,3],
//          [4,5,6],
//          [7,8,9]]

// snail(array) //Result:[1, 2, 3, 6, 9, 8, 7, 4, 5]


// array = [ [1, 2, 3, 4],
//           [5, 6, 7, 8],
//           [9, 10, 11, 12],
//           [13, 14, 15, 16]]

// snail(array) //Result:[1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]


array = [ [1, 2, 3, 4, 5], 
          [6, 7, 8, 9, 10], 
          [11, 12, 13, 14, 15], 
          [16, 17, 18, 19, 20], 
          [21, 22, 23, 24, 25]]

snail(array) //Result: [1, 2, 3, 4, 5, 10, 15, 20, 25, 24, 23, 22, 21, 16, 11, 6, 7, 8, 9, 14, 19, 18, 17, 12, 13]
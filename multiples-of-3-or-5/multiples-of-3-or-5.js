// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. 
// The sum of these multiples is 23.
// Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in. 
// Additionally, if the number is negative, return 0 (for languages that do have them).

function solution(number) {

  let numberArray = [];

  for (let i = 0; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      numberArray.push(i);
    }
  }

  return (numberArray.length ? numberArray.reduce((a,b) => a + b) : 0);
}

//TEST CASES
console.log(solution(10)); //Return 23

console.log(solution(25)); //Return 143

console.log(solution(-10)); //Return 0

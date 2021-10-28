// Given n, take the sum of the digits of n.
// If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
// The input will be a non-negative integer.

function digital_root(n) {
  
  //Convert number to array of string integers
  let stringArray = Array.from(String(n));

  let sum = 0;

  while (sum === 0 || sum > 9) {

    sum = 0;

    //Add all the integers in the array together
    for (const stringInteger of stringArray) {
      const integer = Number(stringInteger);
      sum = sum + integer;
    }
    
    stringArray = Array.from(String(sum));

  }
  
  return sum;
}

//TEST CASES
console.log(digital_root(17));
console.log(digital_root(2324));
console.log(digital_root(12345));
console.log(digital_root(11111111));



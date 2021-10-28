// Given n, take the sum of the digits of n.
// If that value has more than one digit, continue reducing in this way until a single-digit number is produced.
// The input will be a non-negative integer.

function digital_root(n) {
  
  //Convert number to array of string integers
  let stringArray = [...String(n)];

  let sum = 0;

  //Add all integers in the array together while the sum > 9
  do {

    sum = 0;

    for (const stringInteger of stringArray) {
      const integer = Number(stringInteger);
      sum = sum + integer;
    }

    stringArray = [...String(sum)];

  } while (sum > 9);
  
  return sum;
}

//TEST CASES
console.log(digital_root(16));
console.log(digital_root(456));
console.log(digital_root(12345));
console.log(digital_root(11111111));
console.log(digital_root(0));





// Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid.
// The function should return true if the string is valid, and false if it's invalid.

function validParentheses(parens) {

  let countOpenParentheses = 0;
  let countCloseParentheses = 0;
  let isValid = true;

  const parenthesesArray = parens.split("");

  parenthesesArray.forEach(element => {
    element === "(" ? countOpenParentheses++ : countCloseParentheses++;
    if (parenthesesArray[0] !== "(" ||  parenthesesArray[parenthesesArray.length - 1] !== ")" || countCloseParentheses > countOpenParentheses) {
      isValid = false;
    }
  });

  return isValid;
}

//Test cases
console.log(validParentheses("()"));              //Return true
console.log(validParentheses(")(()))"));          //Return false
console.log(validParentheses("("));               //Return false
console.log(validParentheses("(())((()())())"));  //Return true
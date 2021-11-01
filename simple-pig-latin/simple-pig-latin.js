// Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
// Leave punctuation marks untouched.

function pigIt(str) {

  const stringArray = str.split(" ");

  let pigStringArray = stringArray.map((string) => {
    if (string !== "!" && string !== "." && string !== "?") {
      return pigString = string.substr(1, string.length - 1) + string[0] + "ay";
    }
      return string;
  });

  return pigString = pigStringArray.join(" ");
}

//Test cases
console.log(pigIt('Pig latin is cool')); // Result: igPay atinlay siay oolcay
console.log(pigIt('Hello world !'));     // Result: elloHay orldway !
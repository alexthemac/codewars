//It should remove all values from list a,
//which are present in list b keeping their order.

function arrayDiff(a, b) {
  let arrayC = [];
  
  a.forEach(element => {
    if (!b.includes(element)) {
      arrayC.push(element);
    }
  });
  
  return arrayC;  
}

//TEST CASES
// arrayDiff([1,2],[1]) == [2]
// arrayDiff([1,2,2,2,3],[2]) == [1,3]

console.log(arrayDiff([1,2],[1]));
console.log(arrayDiff([1,2,2,2,3],[2]));


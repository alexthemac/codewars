function dirReduc(arr) {

  for (let i = 0; i < arr.length;) {
    if (arr[i] === "NORTH" && arr[i + 1] === "SOUTH" ||
        arr[i] === "SOUTH" && arr[i + 1] === "NORTH" ||
        arr[i] === "EAST" && arr[i + 1] === "WEST" ||
        arr[i] === "WEST" && arr[i + 1] === "EAST") {
        
      arr.splice(i, 2);

      i = 0;
    } else {
      i++;
    }
  }
  return (arr);
}

//Test cases
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])); //Result: ["WEST"]
console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])); //Result: ["NORTH", "WEST", "SOUTH", "EAST"]
console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])); //Result: []
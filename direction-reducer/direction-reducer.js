function dirReduc(arr) {

  // for (const dir of arr) {
  //   console.log(dir);

  // }

  let newArr = [];

  let dirPair = true;


  do {

    dirPair = false;

    for (let i = 0; i < arr.length;) {

      // console.log(arr[i], arr[i+1]);
      if ((arr[i] === "NORTH" && arr[i + 1] === "SOUTH" || 
          arr[i] === "SOUTH" && arr[i + 1] === "NORTH" ||
          arr[i] === "EAST" && arr[i + 1] === "WEST" ||
          arr[i] === "WEST" && arr[i + 1] === "EAST")) {
          
            i = i + 2;

            dirPair = true;

          } else {
            // console.log("PUSHING", i, arr[i]);
  
            newArr.push(arr[i]);
            i = i + 1;
            
          }    

          

    }

    // console.log("newArr", newArr);


    //       console.log("arr, PRE DECON", arr);


    //       arr = [...newArr];

    //       console.log("arr, Post DECON", arr);

  } while (dirPair === true)
 


  // arr.forEach((element, index) => {
  //   if (!(arr[index] === "NORTH" && arr[index + 1] === "SOUTH" || 
  //       arr[index] === "SOUTH" && arr[index + 1] === "NORTH" ||
  //       arr[index] === "EAST" && arr[index + 1] === "WEST" ||
  //       arr[index] === "WEST" && arr[index + 1] === "EAST")) {
  //         newArr.push(element);
  //       }
  //   }
  // )

  return(newArr);

}

//Test cases
console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"])) //Result: ["WEST"]
// console.log(dirReduc(["NORTH", "WEST", "SOUTH", "EAST"])) //Result: ["NORTH", "WEST", "SOUTH", "EAST"]
// console.log(dirReduc(["NORTH", "SOUTH", "EAST", "WEST", "EAST", "WEST"])) //Result: []
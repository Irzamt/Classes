//MAP => returns new array of same length but the elements could be changed in that new array
/*************************************************************************************************************************** */

// let numbers: number[] = [2, 3, 4, 5, 6, 7, 8, 45, 20, 1000, 10000000];

// let updatedArray = numbers.map((data) => data + 1)
// console.log(updatedArray);

// let updatedArray = numbers.map((number) => { // By mapping method
//     if (number % 2 === 0)
//         return "even"; 
//     else
//         return "odd";
// });

// let updatedArray: string[] = []
// for (let i = 0; i < numbers.length; i++) { // By for loop
//     if (numbers[i] % 2 === 0)
//         updatedArray.push("even");
//     else
//         updatedArray.push("odd");
// }

// console.log(updatedArray);
/*************************************************************************************************************************** */

//FILTER => returns same length or less
/*************************************************************************************************************************** */

let numbers: number[] = [2, 3, 4, 5, 6, 7, 8, 45, 20, 1000, 10000000];

// // let updatedArray = numbers.filter(() => true);
// // let updatedArray = numbers.map(() => true);

// let updatedArray = numbers.filter((data) => {
//     if (data >= 45)
//         return true;
// })

// console.log(updatedArray);

let addnumbers = numbers.filter((item) => {
    if (item % 2 === 0)
    return true;
})

console.log(addnumbers);
console.log("Original Array", numbers);

/*************************************************************************************************************************** */
//FOR EACH => returns nothing
/*************************************************************************************************************************** */

let names: string[] = ["abu hurairah", "naveed", "ali"];

names.forEach((data) => {
  console.log(`Your class on sundy will be onTime ${data}`);
});
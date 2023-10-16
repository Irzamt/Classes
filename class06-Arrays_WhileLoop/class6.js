"use strict";
// DECLARING ARRAYS
/************************************************************************** */
// let names:string[] = ["Sayaam", "Irzam", "saeed"];
// // console.log(names);
// // console.log(names[2]);
// let realNum:number[] = [1, 2, 3, 4];
// let sum = realNum[0] + realNum[1];
// // console.log(sum);
//ARRAY METHODS
/************************************************************************** */
// let names:string[] = ["Sayaam", "Irzam", "saeed"];
// console.log(`Before Method: ${names}`);
// names.push("ALi"); //Adds an entry at the end of the array
// console.log(`After Add: ${names}`);
// names.pop(); ////Removes an entry at the end of the array
// console.log(`After pop: ${names}`);
// names.unshift("Waseem");
// console.log(`After unshift: ${names}`);//Adds an entry at the start of an array
// names.shift()
// console.log(`After shift: ${names}`);//Removes an entry at the start of an array
// names.splice(1, 1, "Waseem", "Nadeem");
// console.log(`After Splice: ${names}`);
// console.log(names.length);
// names.splice(names.length - 3, 1, "Waseem", "Nadeem");
// console.log(`After Splice: ${names}`);
// let todos:string[] = ["Class Attend", "Lunch"];
// console.log(todos);
// todos.splice(0, 2, "Snacks");
// console.log(todos);
//---------------------------------------------------------------------------------------------------------------
/*Write a program having an Arrays of todos if the todos are in odd delete one from the center of the array
otherwise remove two todos from the center of the array.*/
// let todos:string[] = ["Wakeup", "Breakfast", "Programming", "Lunch"];
// let len:number = todos.length;
// if (len % 2 !== 0){
//     todos.splice(Math.floor(len/2), 1);
//     console.log(todos);
// }
// else{
//     if (len % 2 === 0){
//         todos.splice((len/2) - 1, 2);
//         console.log(todos);
//     }
// }
//---------------------------------------------------------------------------------------------------------------
//LOOPS
/************************************************************************** */
// let i:number =1;
// console.log("BEFORE LOOP");
// while(i <= 10){
//     console.log(i);
//     i++;
// }
// console.log("AFTER LOOP");
//Write a table of 5
let i = 1;
let num = 5;
while (i <= 10) {
    console.log(`${num} x ${i} = ${num * i}`);
    i++;
}

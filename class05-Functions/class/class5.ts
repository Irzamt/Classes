// 1. Write a program that calculates sum of two numbers using functon
//**********************************************************************************************************************/

// function sum(){
//     let num1:number = 10;
//     let num2:number = 20;
//     let result:number = num1 + num2;
//     console.log(`Result is: ${result}`);
// }

// sum();
//-----------------------------------------------------------------------------------------------------------------------

// 2. Write the same program by using Function Parameters
//**********************************************************************************************************************/

// function sum(num1:number, num2:number){
//     let result:number = num1 + num2;
//     console.log(`Result is: ${result}`);
// }

// sum(20, 30);
//-----------------------------------------------------------------------------------------------------------------------

// 3. Write the same program by using Function and add 5 after calculation
//**********************************************************************************************************************/

// function sum(num1:number, num2:number):number{
//     let result:number = num1 + num2;
//     return result;
// }

// var sumResult1:number = sum(20, 30);
// sumResult1 += 5;
// console.log(`Sumresult1 is: ${sumResult1}`); // a Function can only return one variable not multiple variables

// var sumResult2:number = sum(5, 10);
// sumResult2 += 6;
// console.log(`Sumresult2 is: ${sumResult2}`);
//-----------------------------------------------------------------------------------------------------------------------

// 4. Arrow Function
//**********************************************************************************************************************/

// var sumArrow = (num1:number, num2:number):number =>{ //Anonymous Function
//     var result:number = num1 + num2;
//     return result;
// }

// var sumArrow = (num1:number, num2:number):number => num1 + num2

// var sumResult = sumArrow(6, 3);
// console.log(`Result is: ${sumResult}`);

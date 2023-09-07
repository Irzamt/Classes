//Objects
/*************************************************************************************************************** */

// let car = {
//     company: "honda",
//     color: "white",
//     year: 2023,
//     isUsed: false, 
//     run: function(){ 
//         console.log('car is running');
//     },
//     stop: (a:number, b:number) => a + b,
// };

// let car1 = {
//     company: 'toyota',
//     color: 'white'
// };

// let car2 = {
//     company: 'kia',
//     color: 'gray'
// };
// Objects in Array

// let cars = [car, car1, car2]; 

// let cars:object[] = [ 
//     {
//         company: 'toyota',
//         color: 'white'
//     },
//     car2 = {
//         company: 'kia',
//         color: 'gray'
//     }
// ]

// console.log(car); //printing the whole object
// console.log(car.company); //printing the property key
// console.log(cars[0]); //Printing the index 0
// console.log(cars[1].company);
/*************************************************************************************************************** */

// DataTypes in Objects
/*************************************************************************************************************** */

// let car: {company: string, color:string, isUsed:boolean, year:number} = {
//     company: 'toyota',
//     color: 'white',
//     isUsed: false,
//     year: 2023
// };

// type carType = { company: string, color: string, isUsed: boolean, year: number } // type keyword is used to store dataTypes in a vaiable of objects

// let car1: carType = {
//     company: 'toyota',
//     color: 'white',
//     isUsed: false,
//     year: 2023
// };

// let car2: carType = {
//     company: 'honda',
//     color: 'black',
//     isUsed: false,
//     year: 2023
// };

// let cars: carType[] = [
//     {
//         company: 'toyota',
//         color: 'white',
//         isUsed: false,
//         year: 2023
//     },
//     {
//         company: 'toyota',
//         color: 'white',
//         isUsed: false,
//         year: 2023
//     }
// ]
/*************************************************************************************************************** */

// Write a program that print all the car company and year number from the list, make sure car is an object
/*************************************************************************************************************** */

// type carType = { company: string, color: string, isUsed: boolean, year: number };

// let cars: carType[] = [
//     {
//         company: 'toyota',
//         color: 'white',
//         isUsed: false,
//         year: 2023
//     },
//     {
//         company: 'honda',
//         color: 'white',
//         isUsed: false,
//         year: 2003
//     }
// ];

// for (let i:number = 0; i < cars.length; i++){
//     console.log('years: ' ,cars[i].year);
//     console.log('company: ' ,cars[i].company);
// }
/*************************************************************************************************************** */

// NPM | TypeScript Imports | Exports
/*************************************************************************************************************** */

/*
npm aik aisi repositry (collection) h jis mh dunya k saare open source code prre hain, jis ko hum projects khte hain
*/

 import c from "./sum";
 console.log(c);
 
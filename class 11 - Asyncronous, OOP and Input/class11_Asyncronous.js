"use strict";
/*
Asyncronous Code | Set Timeout Method | Set Interval Method
*********************************************************************************************************/
Object.defineProperty(exports, "__esModule", { value: true });
// console.log("before async code");
// // function doSomething (){
// //     console.log('print something');
// // }
// // setTimeout(doSomething, 5000) //The function doSomething() will wait 5s
// // short way to write the above code
// // setTimeout (() => {
// //     console.log('print do something');
// // }, 10000)
// setInterval(() => {
//     console.log('print something');
// }, 1000) //The function will be executed indefinetly after 1s time interval
// console.log('after async code');
/**************************************************************************************************

Promise Handling | Obect Oriented Class Concept
***************************************************************************************************/
/*
Class is an entity which represents some Properties and Methods
*/
// type CarType = {price: number, color: string, startCar: () => number};
// class Car { 
//     price: number = 0;
//     color: string = 'not defined'
//     constructor (color: string, price: number){ //constrcutor method will automatically be called
//         this.price = price;
//         this.color = color;
//         console.log('constructor'); 
//     }
//     startCar = () => { //This method will not be called automatically
//         console.log('startCar'); 
//         return 0;
//     }
// }
// let carA: CarType = new Car('red', 234)
// carA.startCar()
// let carB: CarType = new Car('blue', 378)
// console.log('carA', carA);
// console.log('carB', carB);
// type objType = {price: number, color: string};
// let obj: objType = {
//     price: 234,
//     color: 'red'
// }; 
/******************************************************************************************************
 
 ******************************************************************************************************/
// console.log('before async');
// let setIntervalOutID: number = 0;
// setIntervalOutID = setTimeout (() => {
//     console.log('setTimeOut async'); 
// }, 10000)
// if (false)
//     clearInterval(setIntervalOutID)
// console.log('after async');
//---------------------------------------------------------------------------------------------------------
console.log('before async code');
function PromiseFunction(resolve, reject) {
    // async
    if (false)
        resolve("successfully async code executed");
    else
        reject("something went wrong");
}
const result = new Promise(PromiseFunction);
result
    .then(sucess => console.log('success', sucess))
    .catch(error => console.log('error', error));
console.log('after async code');

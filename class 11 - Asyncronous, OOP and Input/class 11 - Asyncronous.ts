/*
Asyncronous Code | Set Timeout Method | Set Interval Method
*********************************************************************************************************/

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

type CarType = {price: number, color: string};
class Car { 
    price: number = 0;
    color: string = 'not defined'
}

let carA: CarType = new Car();
let carB: CarType = new Car();

console.log(carA);




// type objType = {price: number, color: string};

// let obj: objType = {
//     price: 234,
//     color: 'red'
// }; 
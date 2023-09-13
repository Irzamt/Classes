"use strict";
/*
Asyncronous Code | Set Timeout Method | Set Interval Method
*********************************************************************************************************/
console.log("before async code");
// function doSomething (){
//     console.log('print something');
// }
// setTimeout(doSomething, 5000) //The function doSomething() will wait 5s
// short way to write the above code
// setTimeout (() => {
//     console.log('print do something');
// }, 10000)
setInterval(() => {
    console.log('print something');
}, 1000);
console.log('after async code');

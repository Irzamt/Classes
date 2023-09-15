"use strict";
/*
Asyncronous Code | Set Timeout Method | Set Interval Method
*********************************************************************************************************/
class Car {
    constructor(color, price) {
        this.price = 0;
        this.color = 'not defined';
        this.startCar = () => {
            console.log('startCar');
            return 0;
        };
        this.price = price;
        this.color = color;
        console.log('constructor');
    }
}
let carA = new Car('red', 234);
carA.startCar();
let carB = new Car('blue', 378);
console.log('carA', carA);
console.log('carB', carB);
// type objType = {price: number, color: string};
// let obj: objType = {
//     price: 234,
//     color: 'red'
// }; 

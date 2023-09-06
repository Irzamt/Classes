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


// DataTypes in Objects

// let car: {company: string, color:string, isUsed:boolean, year:number} = {
//     company: 'toyota',
//     color: 'white',
//     isUsed: false,
//     year: 2023
// };

type carType = { company: string, color: string, isUsed: boolean, year: number }

let car1: carType = {
    company: 'toyota',
    color: 'white',
    isUsed: false,
    year: 2023
};

let car2: carType = {
    company: 'honda',
    color: 'black',
    isUsed: false,
    year: 2023
};


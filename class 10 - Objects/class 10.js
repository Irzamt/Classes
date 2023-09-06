"use strict";
//Objects
/*************************************************************************************************************** */
let cars = [
    {
        company: 'toyota',
        color: 'white',
        isUsed: false,
        year: 2023
    },
    {
        company: 'honda',
        color: 'white',
        isUsed: false,
        year: 2003
    }
];
for (let i = 0; i < cars.length; i++) {
    console.log('years: ', cars[i].year);
    console.log('company: ', cars[i].company);
}

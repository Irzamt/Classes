// var i:number = 1;
// // i++;
// var result:number = 2 + 4 + i++;
// // ++i;
// // i--;
// // --i;

// console.log("i: " + i);
// console.log("result: " + result);

// let i:number = 1;
// while(i < 10){
//     console.log("Irzam");
//     i++;
// }

// for (let i = 20; i > 10; i--){
//     console.log("i");
    
// }

// let i = 1;
// do {
//     console.log("Laanti Bhenchod Bharwa Sayaam");
//     i++;
// }
// while(i < -20)

//Write a program that calculates sum of even numbers b/w 1 and 100

let sum1:number = 0;

for (let i:number = 1; i <= 100; i++){
    if (i % 2 === 0){
        sum1 += i;
    }
}
console.log(`sum: ${sum1}`);

//Write a program that calculates sum of even numbers b/w 1 and 100 and list all the numbers that participate in sum calculation, print the list along the sum 

let sum:number = 0;
let list:number[] = [];

for (let i:number = 1; i <= 100; i++){
    if (i % 2 === 0){
        sum1 += i;
        list.push(i);
    }
}
console.log(`sum: ${sum}`);
console.log("List of Even Numbers: " , list);

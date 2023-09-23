import inquirer from "inquirer"

console.log('first'); //syncronous

// let result = inquirer.prompt({
//     type: 'number',
//     name: 'num1',
//     message: 'Enter num1'
// }) 

// result.catch ((success) => {
//     let promise = inquirer.prompt({
//         type: 'number',
//         name: 'num2',
//         message: 'Enter num2'
//     }) 
//     promise.then ((success) => {
//         console.log('success', success);
//     })
//     .catch ((err) => {
//         console.log('err', err);
//     })
// })
// .catch ((err) => {
//     console.log('err', err);
// })

async function uploadUsers() { //function body is syncronous that is achieved by adding await keyword
    let result = await inquirer.prompt({
        type: 'number',
        name: 'num1',
        message: 'Enter num1'
    })
    console.log("result", result);

    if (result.num1 > 50) {
        let result2 = await inquirer.prompt({
            type: 'number',
            name: 'num2',
            message: 'Enter num2'
        })
        console.log("result2", result2);

        if (result2.num2 > 20) {
            let result3 = await inquirer.prompt({
                type: 'number',
                name: 'num3',
                message: 'Enter num3'
            })
            console.log("result3", result3);

        }
    }


    console.log('second');
}

uploadUsers(); //Calling the function is asyncronous

console.log('third'); //syncronous

/*
if we dont use await key word then we use .then () and .catch() functions
*/
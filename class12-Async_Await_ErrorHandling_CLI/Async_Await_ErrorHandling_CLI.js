import inquirer from "inquirer";
console.log('first');
async function uploadUsers() {
    inquirer.prompt([{
            type: 'number',
            name: 'num1',
            message: 'Enter num1'
        }]);
    console.log('second');
}
uploadUsers();
console.log('third');

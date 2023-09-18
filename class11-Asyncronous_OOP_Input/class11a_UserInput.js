import inquirer from "inquirer";
// const questions: QuestionCollection = [{
//     name: 'age',
//     type: 'number',
//     message: 'What is your age?'
// },
// {
//     name: 'userName',
//     type: 'input',
//     message: 'What is your name?'
// }]
// let answers: Promise<Answers> = inquirer.prompt(questions);
// answers
// .then ((answers: Answers) => console.log("answers", answers))
// .catch((err) => console.log("err", err));
// console.log('this the log');
const questions = [{
        name: 'num1',
        type: 'number',
        message: 'Enter number 1'
    },
    {
        name: 'num2',
        type: 'number',
        message: 'Enter number 1'
    },
    {
        name: 'operations',
        type: 'list',
        message: 'Enter operation',
        choices: ['+', '-', '*', '/']
    }];
let answers = inquirer.prompt(questions);
answers
    .then((answers) => {
    switch (answers.operations) {
        case '*':
            console.log(`${answers.num1} * ${answers.num2} = ${answers.num1 * answers.num2}`);
            break;
        case '+':
            console.log(`${answers.num1} + ${answers.num2} = ${answers.num1 + answers.num2}`);
            break;
        case '-':
            console.log(`${answers.num1} - ${answers.num2} = ${answers.num1 - answers.num2}`);
            break;
        case '/':
            console.log(`${answers.num1} / ${answers.num2} = ${answers.num1 / answers.num2}`);
            break;
    }
})
    .catch((err) => console.log("err", err));
console.log('this the log');

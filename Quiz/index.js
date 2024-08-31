#! /usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([{
        name: "question_1",
        type: "list",
        message: "Q1 : Which of the 'simple type' in TypeScript?",
        choices: ["array", "object", "boolean"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2 : What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?",
        choices: ["implicit", "explicit", "optional"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3 ______ is similar to 'any', but a safer alternative when uncertain about the type. : ",
        choices: ["never", "unknown", "similar"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4 : What is the inherited type for the variable example in `const example = ['Dylan']`?",
        choices: ["unknown[]", "string", "any[]", "string[]"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5 :  a Tuple and an Array are the same thing when discussing types",
        choices: ["false", "true", "optional"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "boolean":
        console.log("1.correct...!");
        ++score;
        break;
    default:
        console.log("1.incorrect..!");
}
switch (quiz.question_2) {
    case "explicit":
        console.log("2.correct...!");
        ++score;
        break;
    default:
        console.log("2.incorrect..!");
}
switch (quiz.question_3) {
    case "unknown":
        console.log("3.correct...!");
        ++score;
        break;
    default:
        console.log("3.incorrect..!");
}
switch (quiz.question_4) {
    case "string[]":
        console.log("4.correct...!");
        ++score;
        break;
    default:
        console.log("4.incorrect..!");
}
switch (quiz.question_5) {
    case "false":
        console.log("5.correct...!");
        ++score;
        break;
    default:
        console.log("5.incorrect..!");
}
console.log(`Score ${score}`);

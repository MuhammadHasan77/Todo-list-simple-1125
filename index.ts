import inquirer from "inquirer";
import chalk from "chalk";
let todos = [];
let condition = true;
while (condition) {
  let todoQuestion = await inquirer.prompt([
    {
      name: "firstQuestion",
      type: "input",
      message: "What would you like to add in your todos?",
    },
    {
      name: "secondQuestion",
      type: "confirm",
      message: "Would you like to add more in your todos?",
      default: "true",
    },
  ]);
  todos.push(todoQuestion.firstQuestion);
  console.log(todos);
  condition = todoQuestion.secondQuestion;
}

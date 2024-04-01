#! /usr/bin/env node

import inquirer from "inquirer";

// Todos Array = Done
// Function = Done
// Operation = Done

console.log("Welcome to Todos App..")

let todos: string[] = ["Review class notes and textbook chapters on the topic." ,  "Work on practice questions from the textbook or online resources." , "Get a good night's sleep before the exam to ensure alertness and retention of information."];

async function createTodo (todos:string[]) {

    do{

        let answere = await inquirer.prompt({ 

            name: "select",
            message: "Select an option:",
            type: "list",
            choices: ["add", "update", "view", "delete"]
    
        });
    
       if (answere.select == "add") {
        let addTodo = await inquirer.prompt({
    
            name: "todo",
            message: "Add todos:",
            type: "input"
            
        });
    
        todos.push(addTodo.todo)
        console.log(todos)
    
       };
    
       if (answere.select == "update") {
        let updateTodo = await inquirer.prompt({
    
            name: "todo",
            message: "Select todo for update:",
            type: "list",
            choices: todos.map(todo => todo)
    
        });
    
        let addTodo = await inquirer.prompt({
    
            name: "todo",
            message: "Add todos:",
            type: "input"
            
        });
    
        let newTodos = todos.filter(val => val !== updateTodo.todo)
        todos = [...newTodos, addTodo.todo]
        console.log(todos)
    
       };
    
       if (answere.select == "view") {
    
        console.log(todos)
    
       };
    
       if (answere.select == "delete") {
        let deleteTodo = await inquirer.prompt({
    
            name: "todo",
            message: "Select todo for update:",
            type: "list",
            choices: todos.map(todo => todo)
    
        });
    
        let newTodos = todos.filter(val => val !== deleteTodo.todo)
        todos = [...newTodos]
        console.log(todos)
    
       };
    


    } while(true);

    
};

createTodo(todos);
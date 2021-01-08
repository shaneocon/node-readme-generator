// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
// const axios = require("axios");
const generate = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [

];


// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}
// fs.writeFile("./output/README.md", "This is the generated readme", (err) => {
//     console.log("All Done!")
// })


// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();

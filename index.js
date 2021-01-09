// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateReadMe = require("./utils/generateMarkdown.js");
const writeFileAsync = util.promisify(fs.writeFile);
// TODO: Create an array of questions for user input
function promptUser() { 
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a description of your project"
        },
        {
            type: "input",
            name: "installation",
            message: "What are your installation instructions?"
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide the project usage"
        },
        {
            type: "checkbox",
            name: "license",
            message: "Which license in use?",
            choices: ["MIT", "Apache", "GPL", "other"]
        },
        {
            type: "input",
            name: "credit",
            message: "Please name any additional parties to credit"
        },
        {
            type: "input",
            name: "test",
            message: "What project tests will be used?"
        },
        {
            type: "input",
            name: "username",
            message: "What is your Github username?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?"
        },
    ]);
}



// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
fs.writeFile(fileName, data, (err) => {
    if (err) {
    } else {
    console.log("All Done!")
    }
    });
}



// TODO: Create a function to initialize app
function promisify() {
    promptUser().then((data) => {
        console.log(data);
       
    })
    writeToFile(`./utils/generateMarkdown.js`, readMe);
}

// Function call to initialize app
init();

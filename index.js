
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateReadMe = require("./utils/generateMarkdown");
const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() { 
    return inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is your project title?",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                return "Name your project! Name it!";
                }
            }
        },
        {
            type: "input",
            name: "description",
            message: "Please provide a description of your project",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                return "Just a few words will do.";
                }
            }
        },
        {
            type: "input",
            name: "installation",
            message: "What are your installation instructions?",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                return "Wait, could you add a few steps of instruction, please?";
                }
            }
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide the project usage",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                return "Again, just a few words will do.";
                }
            }
        },
        {
            type: "list",
            name: "license",
            message: "Which license is in use for this project?",
            choices: [
                "MIT", 
                "Apache", 
                "GPL", 
                "Mozilla", 
                "Other"
            ],
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                return "Select a license. If you do not have a license, well, okay that's fine. ";
                }
            }
        },
        {
            type: "input",
            name: "credit",
            message: "Please name any additional parties to credit",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                return "Input [n/a] if none.";
                }
            }
        },
        {
            type: "input",
            name: "test",
            message: "What project tests will be used?",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                return "Input [n/a] if none.";
                }
            }
        },
        {
            type: "input",
            name: "username",
            message: "What is your Github username?",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                return "Git yerselfa Github if'n' youse find yerself without";
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
            validate: (value) => {
                if (value) {
                    return true;
                } else {
                return "Quaaaid, start the reactor!";
                }
            }
        },
    ]);
}


async function promisify() {
    try {
        const data = await promptUser();
        const generateContent = generateReadMe(data);

        await writeFileAsync("./output/README.md", generateContent);
        console.log("README.md successfully created");
    } catch(error) {
        console.log(error);
    }
}
promisify();
    

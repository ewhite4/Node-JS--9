const inquirer = require("inquirer");
const fs = require("fs");
const { writeReadMeFile } = require("./utils/generateMarkdown");

const init = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "Enter your github username",
            validate: nameInput => {
                if(nameInput) {
                    return true;
                } else {
                    console.log("Please enter your github.");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "email",
            message: "Enter your E-mail Address (Required)",
            validate: emailInput => {
                if(emailInput) {
                    return true;
                } else {
                    console.log("Please enter your E-mail Address!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "title",
            message: "Enter the title of your project (Required)",
            validate: titleInput => {
                if(titleInput) {
                    return true;
                } else {
                    console.log("Please enter the title of your project!");
                    return false;
                }
            }
        },
        {
            type: "input",
            name: "desc",
            message: "Provide a description of the project"
        },
        {
            type: "input",
            name: "install",
            message: "Please provide installation instructions"
        },
        {
            type: "input",
            name: "usage",
            message: "Please provide usage information."
        },
        {
            type: "list",
            name: "license",
            message: "Please choose a license.",
            choices: ["MIT","Apache", "Boost", "(none)"]
        },
        {
            type: "input",
            name: "contribution",
            message: "Please provide contributors and guidelines"
        },
        {
            type: "input",
            name: "tests",
            message: "Please provide a list of instructions"
        },
    ])
    .then(response => {
        console.log(responses);
        writeReadMeFile(responses);
    });
};

init();
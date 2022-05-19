// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js');\
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
        validate: titleInput => {
            if (titleInput) {
                return true;
            }   else {
                    console.log('Error, please enter title!');
                    return false;
            }        
        }
    },
    {
        type: 'input',
        name: 'GitHubUserName',
        message: 'What is your GitHub username?',
        validate: gitHubInput => {
            if (gitHubInput) {
                return true;
            } else {
                console.log("Error, please enter GitHub username!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: emailInput => {
            if (emailInput) {
                return true;
            } else {
                console.log('Error, please enter email!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'what',
        message: 'What is your project?',
        validate: whatInput => {
            if (whatInput) {
                return true;
            } else {
                console.log("Please enter project!");
                return false;
            }
        }
    },
    {
        type: 'input',
        name: ''
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

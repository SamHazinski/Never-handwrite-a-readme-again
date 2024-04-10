// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = ["What is the title of your project?",
"Write a short description of your project",
"Are there any special installation instructions?", 
"How is your project used?",
"Is there anyone else you'd like to credit?",
"Which license would you like to use?"];

// TODO: Create a function to write README file
function generateReadMe(answers) {
return `# ${answers.title}

## Description
${answers.description}

## Installation
${answers.installation}

## Usage
${answers.usage}

## Credits
${answers.credits}

## License
${answers.license}`
}

// TODO: Create a function to initialize app
function init() {
inquirer
.prompt([
    {
        type: "input",
        name: "title",
        message: questions[0]
    },
    {
        type: "input",
        name: "description",
        message: questions[1]
    },
    {
        type: "input",
        name: "installation",
        message: questions[2]
    },
    {
        type: "input",
        name: "usage",
        message: questions[3]
    },
    {
        type: "input",
        name: "credits",
        message: questions[4]
    },
    {
        type: "list",
        name: "license",
        message: questions[5],
        choices:['MIT License', "Apache License 2.0",
    "GNU General Public License v3.0", "BSD 2-Clause Simplified License",
     "BSD 3-Clause New License", "Boost Software License"]
    }
])
.then((answers) =>{
    fs.writeFile('resultREADME.md', generateReadMe(answers), (err) => 
    err ? console.log(err) : console.log('readme.md created'));
})


}

// Function call to initialize app
init();

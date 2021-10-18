// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const promptProject = () => {
      return inquirer.prompt([
        {
            type: 'input',
            name: 'Github',
            message: "What is your GitHub username? (Required)",
            validate: GithubInput => {
              if (GithubInput) {
                return true;
              } else {
                console.log('You need to Github user name!');
                return false;
              }
            }
          },
          {
            type: 'input',
            name: 'email',
            message: 'What is your email address?',
        },  
        {
          type: 'input',
          name: 'title',
          message: "What is your project's name? (Required)",
          validate: nameInput => {
            if (nameInput) {
              return true;
            } else {
              console.log('You need to enter a project name!');
              return false;
            }
          }
        },
        {
          type: 'input',
          name: 'description',
          message: 'Please provide a short description of your project (Required)',
          validate: descriptionInput => {
            if (descriptionInput) {
              return true;
            } else {
              console.log('You need to enter a project description!');
              return false;
            }
          }
        },
        {
          type: 'list',
          name: 'license',
          message: 'What Kind of Licence should your project have?',
          choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BDS 3.0', 'None']
        },
        {
            type: 'input',
            name: 'command',
            message: 'What command should be run to install dependecies? (nmp i)',
            
        },
        {
            type: 'input',
            name: 'test',
            message: 'What command should be run to run tests?',
        },
        {
            type: 'input',
            name: 'repo',
            message: 'What does the user need to know about using the repo?',
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'What does the user need to know about contributing to the repo?',
        },
     ])
  };


// TODO: Create a function to write README file
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./README.md', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: 'File was created!'
        });
      });
    });
  };

// TODO: Create a function to initialize app
function init() {
    promptProject()
    .then(data  = data =>{
        return generateMarkdown(data)
    })
    .then(filemarkdown = filemarkdown =>{
        return writeToFile(filemarkdown);
    })
    .then(copyFileResponse => {
        console.log(copyFileResponse);
      })
      .catch(err => {
        console.log(err);
      });
}

// Function call to initialize app
init()

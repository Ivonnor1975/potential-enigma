// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
//const generateMarkdown = require('./utils/generateMarkdown');
let questions = [];

// TODO: Create an array of questions for user input
const promptProject = () => {
    // If there's no 'projects' array property, create one
      if (!questions) {
            questions = [];
      }
      return inquirer
      .prompt([
        {
          type: 'input',
          name: 'name',
          message: 'What is the name of your project? (Required)',
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
          message: 'Provide a description of the project (Required)',
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
          type: 'checkbox',
          name: 'languages',
          message: 'What did you this project with? (Check all that apply)',
          choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
          type: 'input',
          name: 'link',
          message: 'Enter the GitHub link to your project. (Required)',
          validate: linkInput => {
            if (linkInput) {
              return true;
            } else {
              console.log('You need to enter a project GitHub link!');
              return false;
            }
          }
        },
       ])
      .then(projectData => {
        questions.push(projectData);
      })      
  };


// TODO: Create a function to write README file
//function writeToFile(fileName, data)
const writeToFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', fileContent, err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: 'File created!'
        });
      });
    });
  };

// TODO: Create a function to initialize app
function init() {
    promptProject()
    .then(portfolioData => {
        return generateMarkdown(portfolioData);
      })
      .then(fileMarkdown => {
        return writeToFile(fileMarkdown);
      })
      .then(copyFileResponse => {
        console.log(copyFileResponse);
      })
      .catch(err => {
        console.log(err);
      });
}

// Function call to initialize app
init();


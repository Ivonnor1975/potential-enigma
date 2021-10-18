// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseBadge(license)}
  
  ## Description
  
  ${data.description}
  
  ## Table of Contents

  * [Installation](#installation)
  * [Usage](#usage)
  * [Licence](#license)
  * [test](#test)
  * [Question](#questions)
  
  ## Installation

  To install necessary dependecies, run the following commands:  ${data.command}
  
  ## Usage
  
  ${data.repo}

  ## License
  ${renderLicenseSection(license)}

  ## Contributing 

  ${data.contribute}
  
  ## Tests

  To run tests, run the following command: ${data.test}

   
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.Github}](https://github.com/${data.Github}) 
`;
}

module.exports = generateMarkdown;

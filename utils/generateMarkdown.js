// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
    if (license==="MIT") {
      return `![License](https://img.shields.io/badge/license-MIT-Blue.svg)
              `;
    }
    if (license==="Apache 2.0"){
      return `![License](https://img.shields.io/badge/License-Apache--2.0-blue)
             `;
    }
    if (license==="GPL 3.0"){
      return `![License](https://img.shields.io/badge/License-GPL%203.0-green)
      `;
    }
    if (license==="BDS 3.0"){
      return `![License](https://img.shields.io/badge/License-BDS%203.0-orange)
      `;
    }
    if (license==="None") {
      return '';
    }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license==="MIT") {
    return `https://opensource.org/licenses/MIT
            `;
  }
  if (license==="Apache 2.0"){
    return `https://opensource.org/licenses/Apache-2.0
           `;
  }
  if (license==="GPL 3.0"){
    return `https://opensource.org/licenses/GPL-3.0
    `;
  }
  if (license==="BDS 3.0"){
    return `https://opensource.org/licenses/BSD-3-Clause
    `;
  }
  if (license==="None") {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license==="None") {
    return '';
  }
  return `
  This project is licensed under the ${license}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let {license} = data;
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
  
  Link: ${renderLicenseLink(license)}
   
  ## Contributing 

  ${data.contribute}
  
  ## Tests

  To run tests, run the following command: ${data.test}
   
  ## Questions
  If you have any questions about the repo, open an issue or contact me directly at ${data.email}. You can find more of my work at [${data.Github}](https://github.com/${data.Github}) 
`;
}

module.exports = generateMarkdown;

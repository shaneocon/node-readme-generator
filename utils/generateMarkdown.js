// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateReadMe(data) {
  return `
  # __${data.title}__

  ## Description

  ${data.description}

  ## Table of Contents

  - [Description](#Description)
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [License](#License)
  - [Credits](#Credits)
  - [Test](#Test)
  - [Github](#Github)
  - [Email](#Email)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}


  ## Credits

  ${data.credit}

  ## Test

  ${data.test}

  ## Github

  ${data.github}

  ## Email

  ${data.email}

  ## License

  ![badge](https://img.shields.io/badge/license-${data.license}-red)
  <br>
  This app is under the ${data.license} license
  <br>
  Github Profile: [${data.username}](https://github.com/${data.username})
  <br>
  Email me @: ${data.email}
  <br><br>
`;
}

module.exports = generateReadMe;

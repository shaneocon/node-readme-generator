
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

  ${data.username}

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

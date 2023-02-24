// function to generate markdown for README
const renderLicenseBadge = (license) => {
  if (license !== "None") {
    return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return''  
}

const renderLicenseLink = (License) => {
  if(License !== "None") {
    return `* [License](#license)\n`
  }
  return '';
}

function generateMarkdown(data) {
  console.log(data);
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

   ### Description

   ${data.description}

   ### Table of Contents

   * [Installation](#installation)

   * [Usage](#usage)

   ${renderLicenseLink(data.license)}

   * [Contributing](#contributing)

   * [Test](#tests)

   * [Questions](#questions)

   ## Installation 

   To install dependencies run the following command:

   \`\`\`
   ${data.installation}
   \`\`\`

   ## Usage

   ${data.usage}
   
   ## License 

   This project is licensed under the ${data.license} license.

   ## Contributing

   ${data.contributing}

   ## Tests

   To run tests, run the folling command:

   \`\`\`
   ${data.test}
   \`\`\`

   ### Questions 

   If you have any question about the repo, open and issue or feel free to contact me at ${data.email}.

   Find more of my work at [${data.github}](https://github.com/${data.github}).







`;
}

module.exports = generateMarkdown;

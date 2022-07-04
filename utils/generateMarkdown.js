const fs = require("fs/promises");

function renderLicenseBadge(license) {
  switch (license){
      case "MIT":
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT]";

        case "Apache":
          return  "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";

        case "Boost":
          return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";

        case "(None)":
          return "";
    };
  };


function generateMarkdown(data) {
  const { title, desc, install, usage, contribution, tests, github, email, license } = data;
  const badge = renderLicenseBadge(license);

  return `# ${data.title}
  ${badge}

  ## Description

  ${desc}

  ## Table of Contents
  * [Installation](#Installation)
  * [Usage](#Usage)
  * [License](#License)
  * [Contributing](#Contributing)
  * [Tests](#Tests)
  * [Questions](#Questions)
  
  ## Installation

  ${install}

  ## Usage

  ${usage}


## License

${license}

## Contributing

${contribution}

## Tests

${tests}

## Questions

Any questions or comments please contact me here.
* Github: [${github}](https://github.com/${github})
* Email Address: [${email}](mailto:${email})
`;
}

function writeReadMeFile (responses) {
  const fileContent = generateMarkdown(responses);
  return fs.writeFile('', fileContent);
};

module.exports = {writeReadMeFile};

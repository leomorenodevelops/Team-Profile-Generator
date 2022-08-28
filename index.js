// Node modules
const inquirer = require('inquirer');
const fs = require('fs');
// Team profiles
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
// Link to page creation
const generateSite = require('./src/generate-site.js');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, 'output');
const outputPath = path.join(OUTPUT_DIR, 'team.html');
// Team array
const teamMembers = [];

// Start of user prompts
const promptManager = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the manager? (Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the name of the manager!');
                    return false;
                }
            }
        },
        {
            type: 'input',
             name: 'employeeId',
             message: 'Enter employee ID (Required)',
             validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter employee ID!');
                    return false;
                }
             }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: 'Enter office number (Required)',
            validate: officeNumber => {
                if (officeNumber) {
                    return true;
                } else {
                    console.log('Please enter office number!');
                    return false;
                }
            }
        },
    ]).then(answers => {
        console.log(answers);
        const manager = new Manager(answers.name, answers.employeeId, answers.email, answers.officeNumber);
        teamMembers.push(manager);
        promptMenu();
    })
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Please select which option you would like to continue with:',
            choices: ['add an engineer', 'add an intern', 'finish building my team']
        }
    ]).then(userChoice => {
        switch (userChoice.menu) {
            case "add an engineer":
                promptEngineer();
                break;
            case "add an intern":
                promptIntern();
                break;
            default:
                buildTeam();
        }
    });
};

const promptEngineer = () => {
    console.log(`
    ===============
    Add a New Engineer
    ===============
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the engineer? (Required)',
            validate: engineerName => {
                if (engineerName) {
                    return true;
                } else {
                    console.log('Please enter the name of the engineer!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'Enter employee ID (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter email address (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'githubUsername',
            message: 'Enter Github username (Required)',
            validate: githubUsername => {
                if (githubUsername) {
                    return true;
                } else {
                    console.log('Please enter Github username!');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const engineer = new Engineer(answers.name, answers.employeeId, answers.email, answers.githubUsername);
        teamMembers.push(engineer);
        promptMenu();
    })
};

const promptIntern = () => {
    console.log(`
    ===============
    Add a New Intern
    ===============
    `);

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of the intern? (Required)',
            validate: internName => {
                if (internName) {
                    return true;
                } else {
                    console.log('Please enter the name of the intern!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is the employee ID (Required)',
            validate: employeeId => {
                if (employeeId) {
                    return true;
                } else {
                    console.log('Please enter employee ID!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address (Required)',
            validate: email => {
                if (email) {
                    return true;
                } else {
                    console.log('Please enter email address!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: 'Enter the school name (Required)',
            validate: school => {
                if (school) {
                    return true;
                } else {
                    console.log('Please enter school name!');
                    return false;
                }
            }
        }
    ]).then(answers => {
        console.log(answers);
        const intern = new Intern(answers.name, answers.employeeId, answers.email, answers.school);
        teamMembers.push(intern);
        promptMenu();
    })
};
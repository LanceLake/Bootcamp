/*

GIVEN a command-line application that accepts user input

WHEN I am prompted for my team members and their information
THEN an HTML file is generated that displays a nicely formatted team roster based on user input

WHEN I click on an email address in the HTML
THEN my default email program opens and populates the TO field of the email with the address

WHEN I click on the GitHub username
THEN that GitHub profile opens in a new tab

WHEN I start the application
THEN I am prompted to enter the team manager’s name, employee ID, email address, and office number

WHEN I enter the team manager’s name, employee ID, email address, and office number
THEN I am presented with a menu with the option to add an engineer or an intern or to finish building my team

WHEN I select the engineer option
THEN I am prompted to enter the engineer’s name, ID, email, and GitHub username, and I am taken back to the menu

WHEN I select the intern option
THEN I am prompted to enter the intern’s name, ID, email, and school, and I am taken back to the menu

WHEN I decide to finish building my team
THEN I exit the application, and the HTML is generated

*/


const fs = require('fs');
const inquirer = require('inquirer');

class Team {
  constructor(type, name, id, email, gitschool) {
	this.type = type;
    this.id = id;
    this.name = name;
    this.email = email;
	this.gitschool = gitschool;
  }
}

function init() {

inquirer.prompt([
  {
    type: 'input',
    name: 'managerName',
    message: 'Please enter the team manager\'s name:'
  },
  {
    type: 'input',
    name: 'managerID',
    message: 'Please enter the team manager\'s employee ID:'
  },
  {
    type: 'input',
    name: 'managerEmail',
    message: 'Please enter the team manager\'s email address:'
  },
  {
    type: 'input',
    name: 'managerOffice',
    message: 'Please enter the team manager\'s office number:'
  }
]).then(answers => {
	menu();
})
}


function menu() {

  inquirer.prompt([
    {
      type: 'list',
      name: 'teamMember',
      message: 'What type of team member would you like to add?',
      choices: ['Engineer', 'Intern', 'Finished']
    }
  ]).then(teamMemberAnswer => {
    if (teamMemberAnswer.teamMember === 'Engineer') {
      inquirer.prompt([
        {
          type: 'input',
          name: 'engineerName',
          message: 'Please enter the engineer\'s name:'
        },
        {
          type: 'input',
          name: 'engineerID',
          message: 'Please enter the engineer\'s employee ID:'
        },
        {
          type: 'input',
          name: 'engineerEmail',
          message: 'Please enter the engineer\'s email address:'
        },
        {
          type: 'input',
          name: 'engineerGitHub',
          message: 'Please enter the engineer\'s GitHub username:'
        }
      ]).then(engineerAnswer => {

		const person = new Team('Engineer', engineerAnswer.engineerName, engineerAnswer.engineerID, engineerAnswer.engineerEmail, engineerAnswer.engineerGitHub);
        menu();
      })

    } else if (teamMemberAnswer.teamMember === 'Intern') {
      inquirer.prompt([
        {
          type: 'input',
          name: 'internName',
          message: 'Please enter the intern\'s name:'
        },
        {
          type: 'input',
          name: 'internID',
          message: 'Please enter the intern\'s employee ID:'
        },
        {
          type: 'input',
          name: 'internEmail',
          message: 'Please enter the intern\'s email address:'
        },
        {
          type: 'input',
          name: 'internSchool',
          message: 'Please enter the intern\'s school:'
        }
      ]).then(internAnswer => {
		const person = new Team('Intern', internAnswer.internName, internAnswer.internID, internAnswer.internEmail, internAnswer.internSchool);
        menu();
      })
    } else if (teamMemberAnswer.teamMember === 'Finished') {
      // Return team info
	  generateHTML();
    }
  })
}


function generateHTML() {
console.log(Team);


}

init();


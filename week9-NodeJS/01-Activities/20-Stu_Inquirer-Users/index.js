const inquirer = require('inquirer');
const fs = require('fs');

let questions = 
	[
		{
			type: 'input',
			message: 'What is your name?',
			name: 'username',
		},
		{
			type: 'checkbox',
			message: 'What coding languages do you know?',
			name: 'codelanguages',
			choices: ["HTML","CSS","Bootstrap","Javascript"]
		},
		{
			type: 'input',
			message: 'What is your preferred method of communication?',
			name: 'communication',
		}
	];


inquirer.prompt(questions)
.then
(
	(response) => 

	fs.appendFile('answers.json', `${JSON.stringify(response)}\n`, (err) => err 
	? console.error(err) 
	: console.log('Commit logged!'))

);

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
function generateMarkdown(type,data) 
{

	let markdown = "";

	switch(type)
	{
		case 'projectTitle':
			markdown = `# ${data}


`;
		break;

		case 'description':
		markdown = `Description

## ${data}


`;
		break;

		case 'installationInstructions':
			markdown =  `Installation
			
## ${data}


`;
		break;

		case 'usageInformation':
			markdown =  `Usage

## ${data}


`;
		break;

		case 'contributionGuidelines':
		markdown =  `Contributing

## ${data}


`;
		break;

		case 'testInstructions':
		markdown =  `Tests

## ${data}


`;
		break;

		case 'githubUsername':
			markdown =  `Questions

Github Username: ${data}


`;
		break;

		case 'emailAddress':
			markdown =  `Email Address: ${data}


`;
		break;
	}

	return markdown;

}

module.exports = generateMarkdown;


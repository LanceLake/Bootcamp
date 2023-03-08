// TODO: Add a comment explaining role of the index.js file and import statements
// Answer: The index.js file is the entry point for the webpack build. It is the file that webpack will look at to determine what to bundle. The import statements are used to import the functions from the other files so that they can be used in the index.js file.

import { boxClick } from './box';
import { headerClick } from './header';

document.getElementById('boxBtn').addEventListener('click', boxClick);
document.getElementById('headerBtn').addEventListener('click', headerClick);

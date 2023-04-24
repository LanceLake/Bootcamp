// TODO: What are we importing?
// File system in node.js

const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// This appends to log.txt, then uses the process.argv (the first variable typed) and puts a return. Then sees if there are any errors.
// If there are quotes, then the quoted argument counts as a full string (it does not send the quotes).

fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>


// TODO: Describe how this ternary operator works
// if err (variable) is true, execute after the ?. If false, execute after the :.

err ? console.error(err) : console.log('Commit logged!')
);

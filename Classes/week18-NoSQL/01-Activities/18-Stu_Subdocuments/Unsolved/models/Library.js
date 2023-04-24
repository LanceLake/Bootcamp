const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema` for the subdocument
const bookSchema = new mongoose.Schema({
	name: { type: String, required: true },
	lastAccessed: { type: Date, default: Date.now }
});

const librarySchema = new mongoose.Schema({
	name: { type: String, required: true },
	books: [bookSchema],
	lastAccessed: { type: Date, default: Date.now }
});

// TODO: Create a model named `Library`
const Library = mongoose.model('Library', librarySchema);
const books = [{name: "1984"},{name: "1985"},{name: "1986"}];


// TODO: Create a new instance of the model including the subdocuments

Library.create(
	{ 
		name: "My Library", books
	}
);



module.exports = Library;

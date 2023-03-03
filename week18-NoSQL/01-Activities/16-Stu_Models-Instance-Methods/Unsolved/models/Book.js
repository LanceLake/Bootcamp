const mongoose = require('mongoose');

// TODO: Define a new schema named `bookSchema`
const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: String,
  price: Number,
  lastAccessed: { type: Date, default: Date.now }
});
// TODO: Create a custom instance method named `getDiscount`
bookSchema.methods.getDiscount = function (discountValue) {
	discount = this.price * discountValue;
	console.log(
		`This book has a price of ${discount}`
	);
};

// TODO: Create a model named `Book`
const Book = mongoose.model('Book', bookSchema);

// TODO: Create a new instance of the model
const book = new Book({ name: '1984', author: 'George Orwell', price: '100' });

// TODO: Call the custom instance method on the instance
book.getDiscount(.2);

module.exports = Book;

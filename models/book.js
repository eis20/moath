var mongoose = require("../helper/db");

const bookSchema = new mongoose.Schema({
  bookName: String,
  price: Number,
  description: String,
  book: File,
  image: String,
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

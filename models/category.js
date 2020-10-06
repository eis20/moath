var mongoose = require("../helper/db");

const categorySchema = new mongoose.Schema({
  title: String,
  description: String,
 
});

const Category = mongoose.model("category", categorySchema);

module.exports = Category;

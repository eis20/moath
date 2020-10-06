var mongoose = require("../helper/db");

const autherSchema = new mongoose.Schema({
  name: String,
  description: String,
  image: String,
});

const Auther = mongoose.model("Auther", autherSchema);

module.exports = Auther;

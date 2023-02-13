require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect('mongodb://localhost/glossary');

const { Schema } = mongoose;

const wordSchema = new Schema({
  word: {type: String, unique: true},
  description: {type: String, required: true}
})

const Word = mongoose.model("Word", wordSchema);

let insertWord = (data) => {
  return Word.create({word: data.word, description: data.description})
}

let searchWord = () => {
  return Word.find({});
}

module.exports.insertWord = insertWord;
module.exports.searchWord = searchWord;

// 1. Use mongoose to establish a connection to MongoDB
// 2. Set up any schema and models needed by the app
// 3. Export the models
// 4. Import the models into any modules that need them

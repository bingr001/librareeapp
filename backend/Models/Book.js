const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let bookSchema = new Schema({
  name: {
    type: String
  },
  author: {
    type: String
  },
  genre: {
    type: String
  },
  rating: {
    type: Number
  },
  notes: {
    type: String
  }
}, {
    collection: 'books'
  })

module.exports = mongoose.model('User', bookSchema)
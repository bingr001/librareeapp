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
  date: {
    type: Date
  },
  rating: {
    type: Number
    // default:
  },
  amazonlink: {
    type: String
  },
  sentences: {
    type: String
  },
  quotes: {
    type: String
  },
  whoshouldread: {
    type: String
  },
  notes: {
    type: String
  }
}, {
    collection: 'books'
  })

module.exports = mongoose.model('User', bookSchema)
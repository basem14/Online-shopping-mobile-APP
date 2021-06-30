const mongoose = require('mongoose')

const categories = new mongoose.Schema({
  categories:[]
})

module.exports = mongoose.model('categories', categories)
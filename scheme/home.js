const mongoose = require('mongoose')

const home = new mongoose.Schema({
        imagePath: {type: String, required: true},
        title: {type: String, required: true},
        description: {type: String, required: true},
        cost: {type: Number, required: true}
})

module.exports = mongoose.model('home', home)
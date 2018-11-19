const mongoose = require('mongoose')


var questions = mongoose.Schema({
    username:String,
    title: String,
    description: String,
    picture:String
},
{ collection: 'questions' })

module.exports = mongoose.model('questions', questions);
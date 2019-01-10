const mongoose = require('mongoose')


var questions = mongoose.Schema({
    asker:String,
    question: String,
    description: String,
    picture:String,
    answerData:Array
},
{ collection: 'questions' })

module.exports = mongoose.model('questions', questions);
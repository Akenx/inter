const mongoose = require('mongoose')

var tasks = mongoose.Schema({
    title:String,
    description:String
    },
    {collection:'tasks'})

module.exports = mongoose.model('tasks',tasks);
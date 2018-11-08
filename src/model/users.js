const mongoose = require('mongoose')

var users = mongoose.Schema(
    {
    username: String,
    password: String
    },
    { collection: users })


module.exports = mongoose.model('users', users);

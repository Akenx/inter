const mongoose = require('mongoose')

var users = mongoose.Schema(
    {
    username: String,
    password: String,
    // type:Boolean,
    },
    { collection: users })

module.exports = mongoose.model('users', users);

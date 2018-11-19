const express = require('express');
const mongoose = require('mongoose');
const bodyParse = require('body-parser');
const app = express();

//link to api
const api = require('./src/api/tasks')
const users = require('./src/api/users')
const questions = require('./src/api/questions')


var db = mongoose.connect('mongodb://localhost/mevn-database',{useNewUrlParser:true});

app.use(bodyParse.json())
app.use(bodyParse.urlencoded({ extended: true }))
app.use('/api',api);
app.use('/api',users);
app.use('/api',questions);
// app.get('/', (req, res) =>{
//     res.send('hello world!!!');
//   });
//打包
// app.use(express.static(__dirname + "/dist/"));
// app.get('*',function(req, res){
// res.sendfile(__dirname + "/dist/index.html");
// });
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`listening to port ${port}...`));
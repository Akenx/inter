const express = require('express');
const router = express.Router();
const Question = require('../model/questions');
const fs = require('fs');
const multer  = require('multer')


router.post('/questions',async (req, res) =>{
    const all = new Question(req.body)
    await all.save()
    res.json({status:'task saved'})
})

// var upload = multer({ dest: 'public/' });
// router.use(express.static('public'));
var createFolder = function(folder){
    try{
        fs.accessSync(folder); 
    }catch(e){
        fs.mkdirSync(folder);
    }  
};
var uploadFolder = './src/assets';

createFolder(uploadFolder);
// 通过 filename 属性定制
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder);    // 保存的路径，备注：需要自己创建
    },
    filename: function (req, file, cb) {
        // 将保存文件名设置为 字段名 + 时间戳，比如 logo-1478521468943
        cb(null,file.originalname);
    }
});

// 通过 storage 选项来对 上传行为 进行定制化
var upload = multer({ storage: storage })

router.post('/upload', upload.single('file'), function(req, res, next){
    var file = req.file;
     console.log(req.body,999)
    var obj = {
        username:11,
        title:22,
        description:33,  
    }
    if(!file){
        obj.picture = null
    }
    else{
        obj.picture = file.originalname
    }

    //  console.log(obj)
    const all = new Question(obj)
     all.save()
    // res.json({status:'task saved'})

    // console.log('文件类型：%s', file.filename);
    // console.log('文件类型：%s', file.mimetype);
    //  console.log('原始文件名：%s', file.originalname);
    // console.log('文件大小：%s', file.size);
    // console.log('文件保存路径：%s', file.path);
    res.send({ret_code: '0'});
});

router.get('/questions',async (req, res) =>{
    await Question.find()
    .then(question =>{
        res.json(question)
    })
    .catch(err =>{
        res.json(err)
    })
})
module.exports = router
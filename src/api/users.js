const express = require('express');
const router = express.Router();
const User = require('../model/users');

router.post('/users',async (req, res) =>{
        const all = new User(req.body)
    // await all.save()
    await User.findOne({username:req.body.username,password:req.body.password},(err,user)=>{
        // if(user){
        //     console.log(user,999)
        // }
        // else{
        //     console.log(err)
        // }
        
        // res.json(user)
    })
    .then(user =>{
        if(user){
        console.log("user already exists")
        }else{
         all.save()
        }
        res.json(user)//接口传到vue文件
    })
    .catch(err =>{
        res.json(err)
    })
})

// router.post('/users',async (req, res) =>{
//     const all = new User(req.body)
//     await all.save()
//     res.json({status:'User saved'})
// })

module.exports = router
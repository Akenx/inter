const express = require('express');
const router = express.Router();
const Task = require('../model/tasks');

router.get('/task',async (req, res) =>{
    await Task.find()
    .then(tasks =>{
        res.json(tasks)
    })
    .catch(err =>{
        res.json(err)
    })
})

router.post('/task',async (req, res) =>{
    const all = new Task(req.body)
    await all.save()
    res.json({status:'task saved'})
})

router.put('/task/:id', async (req, res) =>{
    await Task.findByIdAndUpdate(req.params.id, req.body)
    res.json({
        status:'task update'
    })
})

router.delete('/task/:id', async (req, res) => {
    await Task.findByIdAndRemove(req.params.id)
    res.json({
        status: 'task deleted'
    })
})
module.exports = router
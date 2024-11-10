const express = require('express');
const Task = require('../models/task')
const router = express.Router();
 

//route to get or read all the saved tasks 
router.get('/',async(req,res)=>{
    const tasks = await Task.find();
    res.render('index',{tasks});
})


// route to add task in DB

router.post('/add-task' , async(req,res)=>{
    const {Title , Description , CreatedBy} = req.body
    try{
        const newTask = new Task({Title,Description,CreatedBy});
        await newTask.save();
        res.redirect('/')
    }
    catch(err){
        res.status(500).send('Error Saving Task')
    }
})

//route to update all the tasks

router.post('/update/:id', async(req,res)=>{
    const {Title , Description ,CreatedBy} = req.body
    try{
        await Task.findByIdAndUpdate(req.params.id , {Title,Description,CreatedBy})
        res.redirect('/');
    }
    catch(err){
        console.log('Error Updating data')
    }
})

//route to delete the task

router.post('/delete/:id' , async(req,res)=>{
    try{
        await Task.findByIdAndDelete(req.params.id);
        res.redirect('/');
    }
    catch(err){
        console.log('Error deleting Task')
    }
})

module.exports = router;
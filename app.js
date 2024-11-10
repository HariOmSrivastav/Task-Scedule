const express = require('express');
const mongoose = require('mongoose');
const taskroutes = require('./routes/routes');
const mongoDBURL = 'mongodb+srv://Hari_Om_29:Hariom%40123@nodetuts.2ljbi.mongodb.net/?retryWrites=true&w=majority&appName=Nodetuts'
const app = express();
mongoose.connect(mongoDBURL).then(()=>{
    console.log('Connected to mongoDB');
}).catch((err)=>{
    console.log(err);
})
app.use(express.urlencoded({extended : true}))
app.set('view engine' , 'ejs');
app.use('/',taskroutes);


app.listen(3001 , ()=>{
    console.log(`Server running`)
})
const mongoose = require('mongoose');

const taskschema = new mongoose.Schema({
    Title : {
        type : String,
        required : true,
    },
    Description : {
        type : String,
        required : true,
    },
    CreatedBy : {
        type : String,
        required : true,
    }
}, {timestamps:true});


module.exports = mongoose.model('Task' , taskschema);
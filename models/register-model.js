const mongoose = require('mongoose');

const registerSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        minLength:2,
        maxLength:20
    },
    email:{
        type:String,
        required:true,
        unique:true,
        minLength:2,
        maxLength:20
    },
    password:{
        type:String,
        required:true,
        unique:true,
        minLength:2
    },
    role:{
        type:String,
        required:true,
    }
    
    }, { timestamps:true }
);
module.exports =  mongoose.model("register-data", registerSchema);


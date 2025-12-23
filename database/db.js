require('dotenv').config();
const mongoose = require('mongoose');

const connectDB = async ()=>{
    try {
        await mongoose.connect(process.env.MONGOOSE)
        console.log('DB connected successfully')
    } catch (error) {
        console.log("Error in DB", error.message)
    }
};

module.exports = connectDB;
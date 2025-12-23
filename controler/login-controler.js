require('dotenv').config();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const registerModel = require('../models/register-model')

// Use a strong secret from environment variables!
const secret = process.env.ACCESS_TOKEN_SECRET;

const login = async (req,res) => {
    try{
        const {email, password} = req.body;
        const getUser = await registerModel.findOne({email:email})
        console.log(getUser)
        if (getUser) {
            const match = await bcrypt.compare(password, getUser.password);
            console.log(match);
            if(match) {
                // Your payload
                const token = jwt.sign({
                    user:{
                        username:getUser.name,
                        email:getUser.email,
                        id:getUser._id
                    }
                }, secret, { expiresIn: '10m' });
                res.json({
                    success:true,
                    token:token,
                    Login:"login successfully"
                })
                console.log(token);
            }
        } else {
            return res.json({
                success:false,
                msg:'try to Register '
            })
        }
    } catch(error){
        console.log("error in login-route", error.message)
    }
} 

module.exports = {
    login,
}
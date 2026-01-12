const registerModel = require('../models/register-model');
const bcrypt = require('bcrypt');

const addUser = async(req,res) => {
    try {
        const {name, email, password, role} = req.body;

        const hashedPassowrd = await bcrypt.hash(password, 10);

        const newuser = await registerModel.create({
            name: name,
            email:email,
            password:hashedPassowrd,
            role:role
        });
        if(newuser){
           res.json(
            {
                success : true,
                msg:'data added successfully',
                data:newuser
            }
        )
        } else{
            res.json({
                success : false,
                msg:'invalid data '
            })
        }
            
    } catch (error) {
        console.log('error in controler', error.message);
    } 
}

const getAllData = async(req,res)=>{
    try{
        const alldata = await registerModel.find();
        if (alldata){
            res.json({
                success:true,
                data:alldata
            })
        } else {
            res.json({
                success:false,
                msg:"data not found"
            })
        }
    } catch (error) {
        console.log('error in controler', error.message);
    } 
}

const getById = async(req,res)=> {
    try{
        const getbyid = req.params.id;
        const findData = await registerModel.findById(getbyid)
        if (findData) return res.json({
            success:true,
            data:findData
        }) 
        else return res.json({
            success:false,
            data:"data not found"
        })
    } catch (error) {
        console.log('error in controler', error.message);
    } 
}

const updateData = async(req,res)=>{
    try{
        const updateById = req.params.id;
        const updateData = req.body;
        const updatedData = await registerModel.findByIdAndUpdate({_id:updateById}, updateData, {new:true});
        if (updatedData) return res.json({
            success:true,
            data:updatedData
        })
        else return res.json({
            success:false,
            data:"data not found"
        })
    } catch (error){
        console.log('error in controler', error.message);
    }
}

const deleteData = async(req,res)=>{
    try{
        const deleteById = req.params.id;
        const deletedData = await registerModel.findByIdAndDelete({_id:deleteById});
        if (deletedData) return res.json({
            success:true,
            data:deletedData
        })
        else return res.json({
            success:false,
            data:"data not found"
        })
    } catch (error){
        console.log('error in controler', error.message);

    }
}
module.exports = {
    addUser,
    getAllData,
    getById,
    updateData,
    deleteData
}
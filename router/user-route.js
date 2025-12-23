const express = require('express');
const {addUser, getAllData, getById, updateData, deleteData} = require('../controler/user-controler');
const router = express.Router();

// user routes
router.post('/add', addUser);
router.get('/get', getAllData);
router.get('/get/:id', getById);
router.patch('/update/:id', updateData);
router.delete('/delete/:id', deleteData);

module.exports = router;



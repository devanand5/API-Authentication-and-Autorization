const express = require('express');
const { login } = require('../controler/login-controler')
const {verifyToken} = require('../middlewhere/login-middlewhere')
const loginRouter = express.Router();


loginRouter.post('/user', login);
loginRouter.get('/current', verifyToken);


module.exports = loginRouter;
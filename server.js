require('dotenv').config();
const express = require('express');
const connectDB = require('./database/db');
const registerRouter = require('./router/user-route');
const loginRouter = require('./router/login-route')

const app = express();

//DB connect
connectDB()

//middlewhere
app.use(express.json());
app.use('/api', registerRouter);
app.use('/login', loginRouter)



const port = process.env.PORT;
app.listen(port, ()=>{
    console.log(`server in running port=${port}`)
})

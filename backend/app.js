const express = require('express')
const app =express()
const errorMiddleware=require('./middlewares/error')

const cookieParser = require('cookie-parser')



const path = require('path')
const dotenv=require('dotenv');

dotenv.config({path:path.join(__dirname,"config/config.env")})



app.use(express.json());
app.use(cookieParser());




const users=require('./routes/user')



app.use("/auth",users);

app.use(errorMiddleware)

module.exports=app;
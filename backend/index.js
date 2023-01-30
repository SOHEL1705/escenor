import express from "express";
import cors from 'cors'
import connectToMongo from "./DataBase.js";
import bodyParser from 'body-parser'
import Routes from "./Routes/route.js";
import { Register } from "./Controllers/UserController.js";
import { Login } from "./Controllers/authController.js";

const app=express()

//middlewares
app.use(cors())
app.use(bodyParser.json({extended:true}))
app.use(bodyParser.urlencoded({extended:true}))
// Routes
app.use("/",Routes) 


app.use('/api/users',Register)
app.use('/api/Auth',Login)

const PORT = 8000;
connectToMongo()
const printport =()=>{
    return(
        console.log(`connected with localhost ${PORT}`)      
        )
    }
app.listen(PORT,printport)
import express from "express";
import morgan from "morgan";
// var encrypt=require("encryptjs");
import{snehal,navale,home, error} from './controllers/All-Controllers.js';
import router from './routes/userRoutes.js';
import mongoose from "mongoose";
const app=express();


app.use(morgan('dev'));//middleware
app.use(express.json());//used to parse the data
app.use('/api/v1',router);

mongoose.connect('mongodb+srv://Snehal:Snehal1234@mern-todo.va7rcii.mongodb.net/AwdizDb?retryWrites=true&w=majority')
.then(() => console.log("DB connected successfully"))
.catch((err)=> console.log("DB error =>",err));

app.listen(8002,()=>console.log("working on port 8000"));//port
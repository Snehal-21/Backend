import express from "express";
import morgan from "morgan";
import{snehal,navale,home, error} from './controllers/All-Controllers.js';
import router from './routes/userRoutes.js';
const app=express();

app.use(morgan('dev'));//middleware
app.use(express.json());//used to parse the data
app.use('/api/v1',router);

// app.get("/",home);
// app.get("/snehal",snehal);
// app.get("/navale",navale);
// app.get("/error",error);//pass two parameters first is path second is function

app.listen(8000,()=>console.log("working on port 8000"));//port
import express from "express";
import{snehal,navale,home} from './controllers/All-Controllers.js';
const app=express();
app.get("/",home);
app.get("/snehal",snehal);
app.get("/navale",navale);

app.listen(8000);
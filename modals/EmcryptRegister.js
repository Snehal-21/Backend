import mongoose from "mongoose";
import { Schema } from "mongoose";

const Register=new Schema({
    name:String,
    email:String,
    password:String
});

export default mongoose.model("Register",Register);
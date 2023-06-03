import mongoose from "mongoose";
import { Schema } from "mongoose";

const User=new Schema({
    name:String,
    email:String,
    password:String,
    otpforemail:String,
    otpfornumber:String,
    number:Number,
    otpverifiedEmail:String,
    otpverifiedNumber:String,
    loginOtpEmail:String,
    loginOtpNumber:String
});
export default mongoose.model("Users",User);
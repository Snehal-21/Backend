import {v4 as uuidv4} from 'uuid';
import Users from '../modals/Users.js';
export const otpRegistration=async(req,res)=>{
    try{
        const {number,email}=req.body;
        if (!number) return res.send("Number is required!");
        if(!email) return res.send("Email is required!");
        var codeemail = uuidv4();
        var codenumber=uuidv4();
        // res.send(code);
        const isEmailPresent= await Users.find({email}).exec();
        if(isEmailPresent.length) return res.send("Email already talen!")

        const isNumberPresent=await Users.find({number}).exec();
        if(isNumberPresent.length) return res.send("Number already used!");

        

        const user=new Users({
            email,
            number,
            otpverifiedEmail:false,
            otpverifiedNumber:false,
            otpforemail:codeemail,
            otpfornumber:codenumber
        })
        await user.save();
        res.send("Check your mobile and gmail foe Otp")
    }catch(error){
        res.send(error);
    }
}

export const otpCheckForEmail=async(req,res)=>{
    try{
        const {email,otpforemail,otpverifiedEmail}=req.body;
        if(!email) return res.send("Email is required!");
        if(!otpforemail) return res.send("OTP is required!")

        const user=await Users.find({email}).exec();
        if(!user.length) return res.send("user not found!");
        if(user[0].otpforemail==otpforemail){
           
            await Users.findOneAndUpdate({email},{otpverifiedEmail:true}).exec();
            return   res.send("Email OTP verified!");
        }
        return res.send("Wrong OTP");
    }catch(error){
        return res.send(error);
    }
}

export const otpCheckForNumber=async(req,res)=>{
    try{
        const {number,otpfornumber,otpverifiedNumber}=req.body;
        if(!number) return res.send("Email is required!");
        if(!otpfornumber) return res.send("OTP is required!")

        const user=await Users.find({number}).exec();
        if(!user.length) return res.send("user not found!");
        if(user[0].otpfornumber==otpfornumber){
            await Users.findOneAndUpdate({otpverifiedNumber:true}).exec();
            return res.send("Mobile OTP verified!");
        }
        return res.send("Wrong OTP");
    }catch(error){
        return res.send(error);
    }
}



export const otpLogin=async(req,res)=>{
    try{
        const {email,number}=req.body;
        if(!email) return res.send("Email is required!");
        if(!number) return res.send("Number is required!");

        const user=await Users.find({email,number}).exec();
        if(!user) return res.send("User not found!");
        const codeemail=uuidv4();
        const codenumber=uuidv4();
        const updateuser=await Users.findByIdAndUpdate({_id:user[0]._id},{loginOtpEmail:codeemail,loginOtpNumber:codenumber}).exec();
        res.send("check your Mobile and Email for OTP");
    }
    catch(error){
        return res.send(error);
    }
}

export const otpCkeck_LoginEmail =async(req,res)=>{
    try{
        const {email,otp}=req.body;
        if(!email) return res.send("Email is required!");
        if(!otp) return res.send("Otp is required!");
        const user=await Users.find({email}).exec();
        if(user[0].loginOtpEmail == otp){
            return res.send("Login Successful!")
        }
        return res.send("Wrong Otp")
    }catch(error){
        return res.send(error);
    }
}

export const otpCkeck_LoginNumber =async(req,res)=>{
    try{
        const {number,otp}=req.body;
        if(!number) return res.send("Email is required!");
        if(!otp) return res.send("Otp is required!");
        const user=await Users.find({number}).exec();
        if(user[0].loginOtpNumber == otp){
            return res.send("Login Successful!")
        }
        return res.send("Wrong Otp")
    }catch(error){
        return res.send(error);
    }
}

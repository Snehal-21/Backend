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
            otpverified:false,
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
        const {email,otpforemail,otpverified}=req.body;
        if(!email) return res.send("Email is required!");
        if(!otpforemail) return res.send("OTP is required!")

        const user=await Users.find({email}).exec();
        if(!user.length) return res.send("user not found!");
        if(user[0].otpforemail==otpforemail){
             res.send("Email OTP verified!");
            const response=await Users.findOneAndUpdate({otpverified:true}).exec();
            res.send(response);
        }
        return res.send("Wrong OTP");
    }catch(error){
        return res.send(error);
    }
}

export const otpCheckForNumber=async(req,res)=>{
    try{
        const {number,otpfornumber}=req.body;
        if(!number) return res.send("Email is required!");
        if(!otpfornumber) return res.send("OTP is required!")

        const user=await Users.find({number}).exec();
        if(!user.length) return res.send("user not found!");
        if(user[0].otpfornumber==otpfornumber){
            return res.send("Mobile OTP verified!");
        }
        return res.send("Wrong OTP");
    }catch(error){
        return res.send(error);
    }
}



// export const otpCheckForRegister=async(req,res)=>{
//     try{
//         const {number,email,otp}=req.body;
//         if (!number) return res.send("Number is required");
//         if (!email) return res.send("email is required");
//         if (!otp) return res.send("otp is required");

//         const user=await Users.find({email}).exec();
//         if(!user.length) return res.send("user not found");
//         if(user[0].otp==otp){
//             return res.send("Registration done");
//         }
//        return res.send("wrong otp")

//     }catch(error){
//         return res.send(error)
//     }
// }


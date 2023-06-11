import Regisetr from '../modals/EmcryptRegister.js';
import encrypt from 'encryptjs';

export const Encrypt_Register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        if (!name) return res.send("Name us required!");
        if (!email) return res.send("Email is required!");
        if (!password) return res.send("Password is required!");

        let secretKey = 'ios';//it can be any value
        let cipherText = encrypt.encrypt(password, secretKey, 256);//syntax for encryuption
        const data = new Regisetr({
            name,
            email,
            password: cipherText
        })//use to save into database
        await data.save();
        res.send("registered successfully");
    } catch (error) {
        return res.send(error);
    }
}

export const Encrypt_login=async(req,res)=>{
    try{
        const {email ,password} =req.body;
        if(!email) return res.send("Email is required!");
        if(!password) return res.send("Password is required!");
        
        const response=await Regisetr.find({email}).exec();
        const V_pass=response[0].password;

       
        if(!response.length) return res.send("User not found");
        
            let secretKey='ios';
            let decipher=encrypt.decrypt(V_pass,secretKey,256);//syntax for decryption
            if(decipher==password){
                 res.send("login Successful!");
            }
            else{
                 res.send("Credentials not matched")
            }
        
    }catch(error){
        return res.send(error);
    }
}
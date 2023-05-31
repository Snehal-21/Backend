import Users from "../modals/Users.js";

export const login=async(req,res)=>{  
    try{
        const {userEmail,userPassword}=req.body;
        if (!userEmail) return res.send("user email is required!")
        if (!userPassword) return res.send("user password is required!")
        const response=await Users.find({email:userEmail}).exec();
        if(response.length){
            if(userPassword === response[0].password){
                return res.send("You are logged In.")
            } else{
                return res.send("wrong password")
            }
        } else{
            return res.send("user not found please check your email.")
        }

    }    catch(error){
        return res.send(error,"login error here...")
    }  
 }
 export const register=async(req,res)=>{

    try{
        const {name,email,password,confirmpassword}=req.body;
        if (!name) return res.send("user name is required!")
        if (!email) return res.send("user email is required!")
        if (!password) return res.send("user password is required!")
        if (!confirmpassword) return res.send("user confirm password is required!")
        if(password.length <=8 && confirmpassword.length <=8) return res.send("Password should be minimum 8 digits!")
        if(password!=confirmpassword) return res.send("Password and confirmpassword is not matched!")
        const response=await Users.find({email}).exec();
        if(response.length) return res.send("Email is alereadt taken or you are already registered!")
        
        const user= new Users({
            name,
            email,
            password
        });
        await user.save();
        return res.send("Registration Successfull!")
    }
    catch(error){
       return res.send(error,"error here");
    }
  }

  export const updateuser = async(req,res) => {
    try{
        const {name,email}=req.body;
        const response=await Users.findOneAndUpdate({email},{name}).exec();
        res.send(response);
        }
    
    catch(error){
        return res.send(error,"update arror here...")
    }
  }


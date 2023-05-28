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
        const {userName,userEmail,UserPassword,userConfirmPassword}=req.body;
        if (!userName) return res.send("user name is required!")
        if (!userEmail) return res.send("user email is required!")
        if (!UserPassword) return res.send("user password is required!")
        if (!userConfirmPassword) return res.send("user confirm password is required!")
        if(UserPassword.length <=8 && userConfirmPassword.length <=8) return res.send("Password should be minimum 8 digits!")
        if(UserPassword!=userConfirmPassword) return res.send("Password and confirmpassword is not matched!")
        const response=await Users.find({email:userEmail}).exec();
        if(response.length) return res.send("Email is alereadt taken or you are already registered!")
        
        const user= new Users({
            name:userName,
            email:userEmail,
            password:UserPassword
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
        const {userName,userEmail}=req.body;
        const response=await Users.find({email:userEmail}).exec();
        // if (response.length) return res.send(response)
        console.log(response[0].email)
        console.log(userEmail)
        if(userEmail === response[0].email){
            response[0].name=userName;
          await Users.updateOne({name:response[0].name});
          return res.send("updated")
        }
    }
    catch(error){
        return res.send(error,"update arror here...")
    }
  }


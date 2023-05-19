export const home=(req,res)=>{
    res.status(201).send("home function");
}
export const error=(req,res)=>{
    try{
        res.send("sending message from error function");
    }
    catch(error){
        console.log(error,"-error here");
    }
}

export const snehal=(req,res)=>{
    res.send("sending message from snehal function");
}

export const navale=(req,res)=>{
    res.send("sending message from navale function");
}


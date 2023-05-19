export const addProduct=(req,res)=>{
    try{
    console.log(req.body,"req.body");
    res.send("hii from add product");
    }
    catch(error){
        console.log(error,"error here")
    }
}
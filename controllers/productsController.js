import Products from "../modals/Product.js"
export const addProduct=async(req,res)=>{
    try{
    console.log(req.body,"req.body");
    // res.send("hii from add product");
    const {Name,Price,Image} =req.body;
    if(!Name) return res.send("Name is required");
    if(!Price) return res.send("Price is required");
    const product=new Products({
        name:Name,
        price:Price,
        image:Image
    })
    await product.save();
    return res.send(product);
    }
    catch(error){
        console.log(error,"error here")
    }
}
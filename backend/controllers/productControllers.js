import productModel from "../models/productmodels.js"
import {v2 as cloudinary} from "cloudinary"

const addproduct=async (req,res)=>{
   try{
    const {name,price,description,category}=req.body
    const image=req.file;
    let imageUrl=""
    if(image){
        let result=await cloudinary.uploader.upload(image.path,{resouce_type:"image"})
        imageUrl=result.secure_url
    }
    else{
        imageUrl="http/dumyurl"
    }
    const productdata={
        name,description,category,price:Number(price),
        image:imageUrl,
        date:Date.now()
    }
    console.log(productdata)

    const product=new productModel(productdata)
    await product.save()
    res.json({success:true,message:"added successfully"})
   } catch (error){
    console.log(error)
    res.json({success:false,message:"can not add product"})
   }
}

const listproduct=async (req,res)=>{
    try{
        const products=await productModel.find({})
        res.json({success:true,products})
    } catch(error){
        console.log(error)
        res.json({success:false,message:error.message})

    }
    
}

const removeproduct=async (req,res)=>{
    try{
        await productModel.findByIdAndDelete(req.body._id)
        res.json({success:true,message:"product removed"})
    } catch(error){
        console.log(error)
        res.json({success:false,message:error.message
        })
    }
}

const singleproduct=async (req,res)=>{
    
}

export {addproduct,listproduct,removeproduct,singleproduct}
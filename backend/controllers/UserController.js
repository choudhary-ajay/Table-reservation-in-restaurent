import jwt from "jsonwebtoken"
const adminLogin=(req,res)=>{
    try{
        const {email,password}=req.body

        if(email===process.env.ADMIN_EMAIL && password===process.env.ADMIN_PASSWORD){
            const token=jwt.sign(email+password,process.env.JWT_SECRET)
            res.json({success:true,token,message:"Login successfull"})
        }
        else{
          res.json({success:false,message:"invalid login details"})  
        }
    } catch (error){
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

export {adminLogin}
import reservationmodel from "../models/reservationmodel.js";

const createReservation=async (req,res)=>{
    try{
        const{name,phone,email,date,time,guests}=req.body;
        if(!name || !phone || !email || !date || !time || !guests){
            res.json({success:false,message:"All field reqiured"})
        }
        const reservationdata={name,email,phone,date,time,guests}

        const newreservation= new reservationmodel(reservationdata)
        await newreservation.save();
        res.json({success:true,message:"reservation successfull",reservations:newreservation})
    } catch(error){
        console.log(error)
        res.json({success:false,message:error.message})
    }
}
const getallResrvation=async (req,res)=>{
    try{
        const reservations=await reservationmodel.find()
        res.json({reservations,message:"data fetched"})
    } catch(error){
        res.json({message:"error in fetching reservations"})
    }
}
const deleteReservation=async (req,res)=>{
    try{
        const {id}=req.params
        await reservationmodel.findByIdAndDelete(id)
        res.json({message:"reservation removed"})
    } catch(error){
        res.json({message:"error in removing reservation"})
    }
}
export {createReservation,getallResrvation,deleteReservation}

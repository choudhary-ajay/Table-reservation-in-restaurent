import mongoose from "mongoose";

const connectDb=async ()=>{
    mongoose.connection.on("connected",()=>{
        console.log("connection secured")
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/menu`)
}
export default connectDb
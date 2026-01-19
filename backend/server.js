import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDb from "./config/mongodb.js"
import connectCloudinary from "./config/cloudinary.js"
import userRouter from "./routes/userRoute.js"
import productRouter from "./routes/productRoute.js"
import router from "./routes/reservationRoute.js"

const app=express()
const port=process.env.PORT || 4000

connectDb()
connectCloudinary()
app.use(cors())
app.use(express.json())

app.use("/api/user/",userRouter)
app.use("/api/product/",productRouter)
app.use("/api/reservations/",router)
app.get("/",(req,res)=>{
    res.send("api working")
})

app.listen(port,()=>{console.log("app is live on port"+port)})
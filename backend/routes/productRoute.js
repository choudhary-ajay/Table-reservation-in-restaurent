import express from "express"
import {addproduct,listproduct,removeproduct,singleproduct} from "../controllers/productControllers.js"
import upload from "../middleware/multer.js"
import adminAuth from "../middleware/adminAuth.js"

const productRouter = express.Router()

productRouter.post('/add',upload.single("image"),adminAuth,addproduct)
productRouter.get('/list',listproduct)
productRouter.post('/remove',adminAuth,removeproduct)
productRouter.get('/single',singleproduct)

export default productRouter

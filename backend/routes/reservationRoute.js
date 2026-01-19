import express from "express"
import {createReservation,getallResrvation,deleteReservation} from "../controllers/reservationControllers.js"

const router=express.Router()

router.post("/create",createReservation)
router.get("/get",getallResrvation)
router.delete("/delete/:id",deleteReservation)

export default router
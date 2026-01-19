import React, { useState } from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram, FaXTwitter} from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";
import axios from "axios"
import {toast} from "react-toastify"

const Reservationform = () => {
    const generatetimeslots=()=>{
        const slots=[]
        for(let hour=9;hour<20;hour++){
            const starthour = hour % 12===0 ? 12 : hour % 12;
            const startperiod=hour < 12 ? "AM" : "PM"

            const endhour=(hour+1)%12===0 ? 12 : (hour+1)%12
            const endperiod=(hour+1)< 12 ?"AM" : "PM";

            slots.push(`${starthour}:00 ${startperiod}-${endhour}:00 ${endperiod}`)

        }
        return slots
    }
    const [formdata, setformdata] = useState({
        name:"",
        email:"",
        phone:"",
        date:"",
        time:"",
        guests:"1"
    })
    const handlechange=(e)=>{
        setformdata({...formdata,[e.target.name]:e.target.value})
    }

    const onsubmithandler=async()=>{
        try{
        const response=await axios.post("http://localhost:4000/api/reservations/create",formdata)
        if(response.data.success){
            toast.success(response.data.message)
            setformdata({ name:"",
        email:"",
        phone:"",
        date:"",
        time:"",
        guests:"1"})
        }
        }catch(error){
            toast.error(error.message)
        }
    }
  return (
    <div id='reservation' className='min-h-screen bg-yellow-100 p-6 md:p-12'>
        <div className='max-w-6xl mx-auto grid grid-cols-3 gap-8'>
            <form className='md:col-span-2 bg-white p-8 rounded-lg shadow-md'>
                <h2 className='text-xl font-semibold text-orange-400 uppercase'>Reserve A Table</h2>
                <h1 className='text-3xl font-bold mb-4'>Dine With Us- <span className='text-orange-400'>Reserve Now</span></h1>
                
                <div className='grid md:grid-cols-2 gap-4'>
                    <div className='grid gap-1.5'>
                        <label htmlFor="" className='font-bold'>Full Name</label>
                        <input type="text" placeholder='Full Name' required name='name' value={formdata.name} onChange={handlechange} className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-400' />
                    </div>
                     <div  className='grid gap-1.5'>
                        <label htmlFor="" className='font-bold'>Email</label>
                        <input type="email" placeholder='Email' required name='email' value={formdata.email} onChange={handlechange} className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-400' />
                    </div>
                     <div className='grid gap-1.5'>
                        <label htmlFor="" className='font-bold'>Phone Number</label>
                        <input type="tel" placeholder='Phone Number' required name='phone' value={formdata.phone} onChange={handlechange} className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-400' />
                    </div>
                    <div className='grid gap-1.5'>
                        <label htmlFor="" className='font-bold'>Reservation Date</label>
                        <input type="date" required name='date' value={formdata.date} onChange={handlechange} className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-400'/>
                    </div>
                    <div className='grid gap-1.5'>
                        <label htmlFor="" className='font-bold'>Reservation Time</label>
                        <select name="time" value={formdata.time} id="" required onChange={handlechange} className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-400' >
                            <option value="">Select Time</option>
                            {generatetimeslots().map((slot,index)=>(
                                <option value={slot} key={index}>{slot}</option>
                            ))}
                        </select>
                    </div>
                    <div className='grid gap-1.5'>
                        <label htmlFor="" className='font-bold'>Number of Guests</label>
                        <select name='guests' value={formdata.guests} onChange={handlechange} className='w-full p-3 mb-3 border rounded-lg focus:ring focus:ring-blue-400'>
                            {[...Array(10).keys()].map((i)=>(
                                <option value={i+1} key={i+1}>{i+1} Guests</option>
                            ))}
                        </select>
                    </div>
                </div>
                <button onClick={onsubmithandler} type='button' className='w-full text-white p-3 rounded-lg bg-orange-600 '>Book Now</button>
                 
            </form>
            <div className='bg-black text-gray-300 p-8 rounded-lg shadow-md space-y-10'>
                <div className='text-lg font-bold'>
                    <h3>Address</h3>
                    <p>123, Tower chowk ujjain </p>
                </div>
                <div className='text-lg font-bold'>
                    <h3>Open Time</h3>
                    <p>Mon - Fri: 11:00 AM - 10:00 PM</p>
                    <p> Sat - Sun: 09:00 AM - 11:00 PM</p>
                </div>
                <div className='text-lg font-bold'>
                    <h3>Contact</h3>
                    <p>Phone: 000-1344-533</p>
                    <p>Email: ajayscafe@gmail.com</p>
                </div>
                <div className='text-lg font-bold mb-2'>
                    <h3>Stay Connected</h3>
                    <div className='text-white flex gap-4 mt-2'>
                        <FaFacebookSquare className='text-4xl text-red-500' />
                        <FaXTwitter className='text-4xl text-red-500' />
                        <FaInstagram className='text-4xl text-red-500' />
                        <IoLogoYoutube className='text-4xl text-red-500' />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Reservationform
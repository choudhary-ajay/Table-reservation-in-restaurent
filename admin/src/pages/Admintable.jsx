import React, { useState } from 'react'
import axios from 'axios'
import { backendurl } from '../App'
import { toast } from 'react-toastify'
import { useEffect } from 'react'
import { MdDeleteForever } from "react-icons/md";

export const Admintable = ({token}) => {
  const [reservation,setreserrvation]=useState([])

  const fetchreservation=async ()=>{
    try{
      const response=await axios.get(`${backendurl}/api/reservations/get`,{headers:{token}})
      setreserrvation(response.data.reservations)
    }catch(error){
      console.log(error)
      toast.error(error.message)

    }
  }
  const handledelete=async (id)=>{
    try{
      await axios.delete(`${backendurl}/api/reservations/delete/${id}`)
      toast.success("reservation deleted successfully")
    }catch(error){
      toast.error("reservation can't deleted")
    }
  }
  useEffect(()=>{
    fetchreservation()
  },[handledelete])
  return (
    <div>
      <p className='text-2xl font-bold mb-2 text-center'>Reservations</p>
      {reservation.length===0 ?(<div className='text-center w-full border-t-2 border-gray-300 p-5 text-lg'>No Reservations </div>):
      (<div className='flex flex-col gap-2'>
        <div className='w-full bg-amber-500 p-2 py-4 gap-2 grid grid-cols-[2fr_2fr_1fr_1fr_2fr_1fr_1fr] font-semibold text-xl border-b-2 border-black'>
          <b>Name</b>
          <b>Email</b>
          <b>Phone</b>
          <b>Date</b>
          <b>Time</b>
          <b>Guests</b>
          <b>Action</b>
        </div>
        {reservation.map((item,index)=>
        <div key={index} className='w-full grid gap-2 grid-cols-[2fr_2fr_1fr_1fr_2fr_1fr_1fr] p-2 border-b-2 border-gray-300'>
          <p>{item.name}</p>
          <p>{item.email}</p>
          <p>{item.phone}</p>
          <p>{item.date}</p>
          <p>{item.time}</p>
          <p className='text-center'>{item.guests}</p>
         <button onClick={()=>{handledelete(item._id)}} className=''><MdDeleteForever className='ml-10 text-red-700 text-[28px] cursor-pointer text-center' /></button>
        </div>)}
      </div>)}
    </div>
  )
}

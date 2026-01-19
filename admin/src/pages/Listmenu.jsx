import React, { useEffect, useState } from 'react'
import axios from "axios"
import { backendurl } from "../App"
import { toast } from 'react-toastify'
import { MdDeleteForever } from "react-icons/md";

const Listmenu = ({ token }) => {
  const [list, setlist] = useState([])

  const fetch = async () => {
    try {
      const response = await axios.get(`${backendurl}/api/product/list`, { headers: { token } })
      if (response.data.success) {
        setlist(response.data.products)
      }
      else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }
  useEffect(() => {
    fetch()
  }, [])
  return (
    <div>
      <p className='mb-2 text-2xl font-bold'>Menu List</p>
      <div className='flex flex-col gap-4'>
        <div className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center p-2 border-b-2 border-gray-300 text-lg font-semibold'>
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b className='text-center'>Action</b>
        </div>
          {list.map((item, index) =>
            <div className='grid grid-cols-[1fr_3fr_1fr_1fr_1fr] items-center p-2 border-b-2 border-gray-300 text-lg' key={index}>
              <img src={item.image} className='w-[50px] h-auto' alt="" />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>{item.price}</p>
              <MdDeleteForever className='ml-10 text-red-700 text-[28px] cursor-pointer text-center' />
            </div>)}
      </div>
    </div>
  )
}

export default Listmenu
import React, { useState } from 'react'
import upload_img from "../assets/upload_img.jpg"
import { backendurl } from '../App'
import { toast } from 'react-toastify'
import axios from 'axios'

const Addmenu = ({token}) => {
  const [image,setimage]=useState(null)
  const [name,setname]=useState("")
  const [description,setdescription]=useState("")
  const [category,setcategory]=useState("All")
  const [price,setprice]=useState("")

  const onsubmithandler=async (e)=>{
    e.preventDefault()
      try{
        const formdata=new FormData()
        formdata.append("name",name)
        formdata.append("description",description)
        formdata.append("category",category)
        formdata.append("price",price)
        if(image) formdata.append("image",image)

          const response=await axios.post(`${backendurl}/api/product/add`,formdata,{headers:{token}})
          if(response.data.success){
            toast.success(response.data.message)
            setcategory("")
            setname("")
            setdescription("")
            setprice("")
            setimage(null)
          }
          else{
            toast.error(response.data.message)
          }
      }catch(error){
        console.log(error)
        toast.error(error.message)
      }
  }
  return (
    <div>
      <form onSubmit={onsubmithandler} className='flex flex-col items-start gap-1'>
        <div>
          <p>Upload Image</p>
          <div>
            <label htmlFor="image">
              <img className='w-32 cursor-pointer' src={!image ? upload_img: URL.createObjectURL(image)} alt="" />
              <input type="file" id='image' hidden onChange={(e)=>{setimage(e.target.files[0])}}  />
            </label>
          </div>
        </div>
        <div className='w-full'>
          <p className='mb-2 text-[22px]'>Product Name</p>
          <input type="text" placeholder='Enter Product name'value={name} onChange={(e)=>{setname(e.target.value)}} className='w-full max-w-[500px]
          p4 border border-gray-300 rounded' required />
        </div>
        <div className='w-full'>
          <p className='mb-2 text-[22px]'>Product Description</p>
          <input type="text" name="" placeholder='Enter Product Description' id="" value={description} onChange={(e)=>{setdescription(e.target.value)}} className='w-full max-w-[500px]
          p4 border border-gray-300 rounded'  required />
        </div>
        
        <div className='flex flex-wrap gap-4 w-full'>
          <div className='min-w-[200px]'>
            <p className='mb-2 text-[22px]'>Product Category</p>
            <select name="" id="" value={category} onChange={(e)=>{setcategory(e.target.value)}} className='w-full max-w-[500px] p-3 border border-gray-300 text-[16px] rounded' >
              <option value="All">All</option>
              <option value="Spaghetti">Spaghetti</option>
              <option value="Pizza">Pizza</option>
              <option value="Rice">Rice</option>
              <option value="Noodles">Noodles</option>
              <option value="Chicken">Chicken</option>
              <option value="Drinks">Drinks</option>
            </select>
          </div>
          <div>
          <p className='mb-2 text-[22px]'>Product Price</p>
          <input type="number" placeholder='40' value={price} onChange={(e)=>{setprice(e.target.value)}} required className='w-full max-w-[120px] p-4 border border-gray-300 rounded'/>
        </div>
        </div>
        <button className='mt-6 px-20 py-3 bg-amber-500 rounded opacity-90' type='submit'>Add menu</button>
      </form>
    </div>
  )
}

export default Addmenu
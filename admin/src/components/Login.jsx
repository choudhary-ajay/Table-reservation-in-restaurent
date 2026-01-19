import React, { useState } from 'react'
import { backendurl } from '../App'
import { toast } from 'react-toastify'
import axios from "axios"

const Login = ({setToken}) => {
    const [email,setemail]=useState("")
    const [password,setpassword]=useState("")

    const onsubmithandler=async (e)=>{
        try{
            e.preventDefault();
            const response=await axios.post(backendurl+'/api/user/admin',{email,password})
            console.log(response)
            if(response.data.success){
                setToken(response.data.token)
            }
            else{
                toast.error(response.data.message)
            }
        }catch(error){
            console.log(error)
        }
    }

  return (
    <div>
        <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <div className='bg-white shadow-md rounded-lg px-8 py-6 w-full max-w-md'>
            <h1 className= "text-2xl font-bold text-center text-gray-800 mb-4">Admin Login</h1>
            <form onSubmit={onsubmithandler}>
                <div className='mb-4'>
                    <p className='text-sm font-semibold text-gray-600 mb-2'>Email Address</p>
                    <input type="email" value={email} onChange={(e)=>setemail(e.target.value)} placeholder='Enter Email' required className='w-[95%] px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-b-gray-800'/>
                </div>
                <div  className='mb-4'>
                    <p  className='text-sm font-semibold text-gray-600 mb-2'>Password</p>
                    <input  type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} placeholder='Enter password' required className='w-[95%] px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:border-b-gray-800' />
                </div>
                <button className='w-full px-3 py-2 text-lg font-bold bg-amber-500 rounded-md'>Login</button>
            </form>
        </div>
        </div>
    </div>
  )
}

export default Login
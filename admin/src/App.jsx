import React, { useEffect, useState } from 'react'
import Login from './components/Login'
import Sidebar from './components/Sidebar'
import { Routes,Route } from 'react-router-dom'
import {ToastContainer} from "react-toastify"
import Listmenu from './pages/Listmenu'
import Addmenu from './pages/Addmenu'
import { Admintable } from './pages/Admintable'


export const backendurl="http://localhost:4000"
const App = () => {
  const [token,setToken]=useState(localStorage.getItem(('token') || ""))
  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])
  return (
    <div className='bg-white min-h-screen'>
      <ToastContainer/>
      {!token ? (<Login setToken={setToken}/>)
      :(<>
      <div className='flex w-full'>
        <Sidebar setToken={setToken}/>
        <div className='w-[70%] ml-[max(5vw,25px)] my-8 text-black text-base'>
          <Routes>
            <Route path='/add' element={<Addmenu token={token}/>}/>
            <Route path='/list' element={<Listmenu token={token}/>}/>
            <Route path='/table' element={<Admintable token={token}/>}/>
          </Routes>
        </div>
        </div></>)}
     
      </div>
  )
}

export default App
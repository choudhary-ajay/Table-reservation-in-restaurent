import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menudisplay from './components/Menudisplay'
import Reservationform from './components/Reservationform'
import Footer from './components/Footer'
import {ToastContainer} from "react-toastify"

export const backendurl="http://localhost:4000"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <ToastContainer/>
    <Navbar/>
    <Hero/>
    <Menudisplay/>
    <Reservationform/>
    <Footer/>
    </>
  )
}

export default App

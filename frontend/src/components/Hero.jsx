import React from 'react'
const Hero = () => {
  return (
    <div className='hero relative w-full bg-cover bg-center h-[100vh] bg-no-repeat'>
        <div className='bg-gray-800 absolute inset-0 opacity-35 z-10 '>

        </div>
        <div className='relative z-30  flex flex-col h-full justify-center items-center text-center text-white'>
            <h2 className='text-4xl mb-4 font-bold'>Welcome to the best Restaurent </h2>
            <h1 className='text-6xl mb-6 font-bold'>AJAY'S CAFE</h1>
            <button className='bg-orange-500 px-6 py-3 font-bold text-black rounded-lg'>Book Now</button>
        </div>
    </div>
  )
}

export default Hero
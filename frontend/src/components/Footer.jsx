import React from 'react'
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram,FaRegCopyright} from "react-icons/fa6";
import { IoLogoYoutube } from "react-icons/io";


const Footer = () => {
    return (
        <div className='flex flex-col py-16 px-6 gap-12 bg-white'>
            <div className='grid place-content-center gap-6 text-center'>
                <h2 className='text-4xl text-gray-800 font-bold'>Need Updates On Latest Offers ?</h2>
                <p className='text-lg text-gray-600'>Suscribe to our newsletter to get frequent updates</p>
                <div className='flex justify-center items-center max-w-xl mx-auto w-full'>
                    <input type="email" placeholder='Enter Email' className='flex-grow px-4 py-3 border-2 border-r-0 border-orange-500 rounded-l-full outline-none text-sm' />
                    <button className='bg-orange-500 font-bold rounded-r-full px-6 text-white py-3'>Join Now</button>
                </div>
            </div>
            <div className='flex md:flex-row justify-around items-center text-center md:text-left gap-6'>
                <div>
                    <h2 className='text-gray-800 text-2xl font-bold'>AJAY'S CAFE</h2>
                    <div className='flex justify-center md:justify-start gap-4 mt-3 text-orange-500'>
                        <FaFacebookSquare className='text-3xl cursor-pointer' />
                        <FaInstagram className='text-3xl cursor-pointer'  />
                        <IoLogoYoutube className='text-3xl cursor-pointer'  />
                    </div>
                </div>
                <div>
                    <ul className='flex justify-center gap-6 text-gray-700 text-base font-medium'>
                        <li className='font-medium cursor-pointer'>Home</li>
                        <li className='font-medium cursor-pointer'>Services</li>
                        <li className='font-medium cursor-pointer'>About Us</li>
                        <li className='font-medium cursor-pointer'>Privacy-Policy</li>
                    </ul>
                </div>
            </div>
            <p className='flex justify-center text-sm mt-4 items-center'><FaRegCopyright />2025 AJAY'S CAFE All rights reserved</p>
        </div>
    )
}

export default Footer
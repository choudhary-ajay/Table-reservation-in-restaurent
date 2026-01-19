import React from 'react'

const Navbar = () => {
  return (
    <>
    <div>
        <nav className='flex justify-between h-16 bg-black text-white items-center px-5'>
            <h2 className='text-3xl font-bold'>Ajay's Cafe</h2>
            <div className="items">
                <ul className='flex gap-3'>
                    <li className='font-bold hover:text-orange-600 cursor-pointer'>Home</li>
                    <li className='font-bold hover:text-orange-600 cursor-pointer'>Reservation</li>
                    <li className='font-bold hover:text-orange-600 cursor-pointer'>Menu</li>
                    <li className='font-bold hover:text-orange-600 cursor-pointer'>Contact</li>
                </ul>
            </div>
        </nav>
    </div>
    </>
  )
}

export default Navbar
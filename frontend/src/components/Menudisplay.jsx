import React, { useContext, useState } from 'react'
import { ShopContext } from '../context/shopcontext'
import { categoryItem, product } from '../assets/assets'


const Menudisplay = () => {
    const {products}=useContext(ShopContext)
    const [category,setcategory]=useState("All")
  return (
    <div className='max-w-6xl py-12 px-4 mx-auto '>
        {/* section header */}
       <div className='text-center mb-6'>
        <h1 className='text-4xl font-bold text-gray-800'>Discover Our Menu</h1>
       </div>
       {/* categroiy buttons */}
       <div className='text-center mb-8'>
        <h2 className='text-2xl mb-4 font-medium text-gray-700'>Explore Our Categories</h2>
        <ul className='flex justify-center flex-wrap gap-4'>
            {categoryItem.map((item,index)=>(
                <li key={index} onClick={()=>{setcategory((prev)=> prev===item.category_title?"All":item.category_title)}} 
                className={`cursor-pointer rounded-full text-sm px-6 py-2 font-medium transition-all duration-200 ${category===item.category_title ?"bg-orange-500 text-white":"bg-gray-200 hover:bg-orange-200"} `}>{item.category_title}</li>
            ))}
        </ul>
       </div>
       {/* menu */}
       <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
        {products.length > 0 ?(
            products.filter((product)=>category==="All" || category===product.category).map((product)=>(
            <div key={product._id} className='flex items-center gap-6 p-4 bg-gray-100 rounded-xl shadow-sm'>
                <img src={product.image} alt="" className='h-30 w-30 rounded-full object-cover' />
                <div className='flex-1'>
                    <div className='flex justify-between items-center'>
                        <h3 className='text-lg font-semibold text-gray-800'>{product.name}</h3>
                        <span className='text-lg font-semibold text-orange-600 relative ml-4'>
                            <span className="before:content-[''] before:absolute before:w-10 before:border-b before:border-dotted before:border-gray-400 before:-left-12 before:top-1/2 before:transform before:-translate_y-1/2">
                            </span>
                                ₹{product.price}
                        </span>
                    </div>
                        <p className='text-gray-500 text-sm mt-1'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
                </div>
            </div>
        ))):(
            <p className='text-center col-span-2 text-gray-500'>No Menu Available</p>
        )}
       </div>
    </div>
  )
}

export default Menudisplay
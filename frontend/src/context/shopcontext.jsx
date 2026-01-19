import React,{createContext, useState} from "react";
import { product } from "../assets/assets";
import { backendurl } from "../App";
import { useEffect } from "react";
import {toast} from "react-toastify";
import axios from "axios";

export const ShopContext=createContext()

const ShopContextProvider=({children})=>{
    const [products,setproducts]=useState(product)

    const getproductsdata=async ()=>{
        try{
            const response=await axios.get(`${backendurl}/api/product/list`)
            if(response.data.success){
                await setproducts(response.data.products)
            }
        }catch(error){
         toast.error(error.message)
        }
    }
    useEffect(()=>{
        getproductsdata()
    },[])
    return(
        <ShopContext.Provider value={{products}}>
            {children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider

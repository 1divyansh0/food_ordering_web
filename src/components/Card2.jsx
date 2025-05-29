import React from 'react'
import Image1 from '../assets/image1.avif'
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { plusqty, Removeitem, subqty } from '../redux/cartslice';
import { toast } from 'react-toastify';

const Card2 = ({image,price,id,food_type,food_name,qty}) => {
          console.log(qty)
         let dispatch = useDispatch()
  return (
            <div className='w-full h-35 mt-4 rounded-md p-2 shadow-lg flex justify-between items-center gap-4 overflow-y-auto '>
               <div className='w-[40%] h-full bg-amber-500 rounded-md'>
              <img src={image} alt="" className=' h-full w-full object-cover rounded-md' />
               </div>
               <div className='flex flex-col h-full w-[30%] p-1'>
                <h1 className='text-xl text-green-600 font-semibold'>{food_name}</h1>
                <div className=' flex w-20 md:w-25   h-10 my-auto border-2 border-green-500 rounded-md overflow-hidden'>
                <button className='w-[30%] h-full bg-white  text-md flex justify-center items-center hover:bg-gray-400 cursor-pointer 'onClick={()=>{
                  dispatch(plusqty({id:id,qty:qty}))
                }}>+</button>
                <span className='w-[40%] h-full text-md  bg-slate-200 flex justify-center items-center '>{qty}</span>
                <button className='w-[30%] h-full  bg-white text-md lex justify-center items-center hover:bg-gray-400 cursor-pointer'onClick={()=>{
                  dispatch(subqty({id:id}))
                }}>-</button>
               </div>
               </div>

               <div className=' p-3 w-[30%] h-full flex flex-col justify-between items-center'>
                 <span className='text-lg font-semibold text-green-600'>Price:{price}</span>
                <FaTrash className='h-5 w-5 text-red-600 cursor-pointer' onClick={()=>{
                    dispatch(Removeitem(id)),
                    toast.warning("Item Removed!")
                }}/>
               </div>
            </div>
  )
}

export default Card2
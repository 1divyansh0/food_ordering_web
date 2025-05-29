import React from 'react'
import Image from '../assets/image1.avif'
import { SiOverleaf } from "react-icons/si";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { Additem } from '../redux/cartslice';
import { toast } from 'react-toastify';

const card = ({name,image,food_type,price,id,food_name,qty}) => {
  let dispatch = useDispatch()
  console.log(qty)
  return (
    <div className='bg-white h-100 w-74 rounded-md p-3 flex flex-col shadow-md hover:border-2 border-green-400'>
        <div className='h-[60%] w-full rounded-md overflow-hidden'>
            <img src={image} alt="" className='h-full w-full rounded-md object-cover'/> 
        </div>
        <h1 className='text-2xl font-semibold text-green-600 mt-2'>{name}</h1>
        <div className='w-full flex justify-between items-center h-[15%]'>
        <h1 className='text-xl font-semibold text-green-600'>{price}/-</h1>
        <div className='flex justify-center items-center gap-1 '>
        {food_type == "veg" ? <SiOverleaf className='text-green-600 h-6 w-6'/> : <GiChickenOven className='text-green-600 h-6 w-6'/>}
        <h3 className='text-xl font-semibold text-green-600'>{food_type}</h3>
        </div>
        </div>
        <button className='mt-2 w-full h-[12%] bg-green-600 rounded-md text-white font-semibold text-xl hover:bg-green-400 transition-all duration-200 cursor-pointer' onClick={()=>{
          dispatch(Additem({name:name,image:image,food_type:food_type,price:price,id:id,food_name:food_name ,qty:qty}),
          toast.success("Added to Cart")
        )
        }}>Add To Cart</button>

    </div>
  )
}

export default card
import React, { useContext, useState } from 'react'
import Nav from '../components/nav'
import categories from '../components/Categories'
import Card from '../components/card'
import { food_items } from '../food'
import { datacontext } from '../context/UserContext'
import { ImCross } from "react-icons/im"

import { useSelector } from 'react-redux'
import Card2 from '../components/card2'
import { toast } from 'react-toastify'



const Home = () => {
  
  
  let [input,setinputCate,Cate,setCate,shwocard,setshwocard] = useContext(datacontext)

  function fltr(categories){
    if(categories==="All"){
      setCate(food_items)
    }
    else {
    const newarr = food_items.filter((ele)=>(ele.food_category === categories ))
    setCate(newarr);
    }

  }
  
  // console.log(items)
  let items = useSelector(state=>state.cart);
  let Subtotal = items.reduce((total,ele)=>(total+(ele.price)*(ele.qty)),0);
  
  let Tax = Math.floor(Subtotal*(0.2));
  let Delivery_fee = 49
  if(Subtotal==0)Delivery_fee=0;



  return (
    <div className=' relative w-screen  bg-slate-200'>
      <Nav/>
    {!input?<div className='flex justify-center gap-10 md:gap-6 items-center mt-1 flex-wrap '>
       {categories.map((ele)=>{
         return <div onClick={()=>{
             fltr(ele.name)
         }} className=' shadow-md h-40 w-40 md:h-30 md:w-25 bg-white rounded-md flex flex-col justify-center items-center hover:bg-green-100 duration-200  p-3 gap-3'>
           {ele.icon}
           <h1 className='font-semibold text-green-600 text-2xl md:text-sm'>{ele.name}</h1>
          </div>
       })}

      </div>: null}
      <div className='flex flex-wrap p-7  justify-center items-center gap-5'>
        {Cate.length>1?Cate.map((ele)=>{
        return <Card name={ele.food_name} food_type={ele.food_type} price ={ele.price} image={ele.food_image} id={ele.id} food_name={ele.food_name} qty ={ele.food_quantity}/>
        }):<div className=''>
          <h1 className='text-lg font-semibold text-green-600'>No Dishes Found</h1>
          
          </div>}

      </div>
       <div className={`p-3 fixed transition all duration-500 h-screen w-full md:w-[500px] bg-white top-0 right-0 z-3 shadow-md overflow-y-auto ${shwocard?'translate-x-0':'translate-x-full'}`}>
        <header className='p-4 flex justify-between items-center '>
          <span className='text-green-500 font-semibold text-xl'>Order Items</span>
          <ImCross className=' cursor-pointer text-green-500 hover:text-gray-400 h-5 w-5' onClick={()=>{
            setshwocard(false)

          }}/>
        </header>
        {items.map((ele)=>{
          return <Card2 image={ele.image} price = {ele.price} id = {ele.id} food_type = {ele.food_type} food_name ={ele.food_name} qty = {ele.qty}/>
        })}

        <div className=' mt-8 w-full md:w-[500px] border-2 border-green-600'></div>
        <div className='w-full'>
          <div className='flex justify-between items-center h-15 w-full'>
            <h1 className='text-lg font-semibold text-green-600'>Subtotal:</h1>
            <h1 className='text-lg font-semibold text-green-600'>{Subtotal}</h1>
          </div>
            <div className='flex justify-between items-center h-15 w-full'>
            <h1 className='text-lg font-semibold text-green-600'>Tax:</h1>
            <h1 className='text-lg font-semibold text-green-600'>{Tax}</h1>
          </div>
            <div className='flex justify-between items-center h-15 w-full'>
            <h1 className='text-lg font-semibold text-green-600'>Delivery Fee:</h1>
            <h1 className='text-lg font-semibold text-green-600'>{Delivery_fee}</h1>
          </div>
          <div className=' mt-3 w-full md:w-[500px] border-2 border-green-600'></div>
            <div className='flex justify-between items-center h-15 w-full'>
            <h1 className='text-lg font-semibold text-green-600'>Grandtotal:</h1>
            <h1 className='text-lg font-semibold text-green-600'>{Subtotal+Tax+Delivery_fee}</h1>
          </div>
        </div>
        <button className='w-full h-15 bg-green-600 rounded-md text-lg font-semibold text-white cursor-pointer hover:bg-green-400 ' onClick={()=>{
          {items.length>=1 ? toast.success("Order Placed!"):toast.warn("Cart is Empty!")}
        }}>Place Order</button>
      
      </div>
    </div>

  )
}

export default Home
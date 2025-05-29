import React, { useContext, useEffect } from 'react'
import { MdNoFood } from "react-icons/md";
import { FaCartShopping } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { datacontext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

const Nav = () => {
 
  let [input,setinput,Cate,setCate,shwocard,setshwocard] = useContext(datacontext)
   useEffect(() => {
    let newlist =  food_items.filter((ele)=>ele.food_name.includes(input) || ele.food_name.toLowerCase().includes(input))
    setCate(newlist)
   }, [input])
   let items = useSelector(state=>state.cart);
  return (
    <div className=' w-full h-28 p-6 flex justify-between items-center'>
      <div className=' h-13 md:h-15 w-13 md:w-15 bg-white rounded-md shadow-xl flex justify-center items-center '>
        <MdNoFood  className='h-7 md:h-8 w-7 md:w-8 text-green-600'/>
      </div>
      <form onSubmit={(e)=>preventDefault()} className='bg-white w-[60%] md:w-[40%] h-15 rounded-md shadow-xl flex justify-start items-center  p-2' action="">
        <IoSearch className='ml-0 h-5 md:h-8 w-5 md:w-8 text-green-600' />
       <input onChange={(e)=>{
        setinput(e.target.value)
       }} className=' w-24   md:w-111 bg-white h-7 md:h-15  rounded-md p-4 text-xl outline-none text-green-800' type="text" name="" id="" placeholder='Search Food Here' value={input}/>
      </form>
      <div className=' relative h-13 md:h-15 w-13 md:w-15 bg-white rounded-md shadow-xl flex justify-center items-center' onClick={()=>{
        setshwocard(true)
      }}>
       <FaCartShopping  className='h-5 md:h-7 w-5 md:w-7 text-green-600'/>
       <span className='top-0 right-2 absolute font-semibold text-green-500'>{items.length}</span>
      </div>
     
    </div>
  )
}

export default Nav
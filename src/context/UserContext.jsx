import React, { createContext, useContext, useState } from 'react'
import { food_items } from '../food'
export const datacontext = createContext()
const UserContext = ({children}) => {
const [input, setinput] = useState('')
const [Cate, setCate] = useState(food_items)
const [shwocard, setshwocard] = useState(false)
let data =[
input,
setinput,
Cate,
setCate,
shwocard,
setshwocard
]

  return (
    <div>
        <datacontext.Provider value={data}>
        {children}
        </datacontext.Provider>
        
    </div>
  )
}

export default UserContext
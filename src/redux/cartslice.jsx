import { createSlice } from "@reduxjs/toolkit";
const carslice = createSlice({
    name: 'cart',
    initialState:[],
    reducers:{
        Additem: (state,action)=>{
          let existitem = state.find((ele)=>(ele.id===action.payload.id))
          if(existitem){
            return state.map((ele)=>(ele.id===action.payload.id?{...ele,qty:ele.qty+1}:ele))
          }
          else{
            state.push(action.payload)
          }
        },
        Removeitem:(state,action)=>{
          return state.filter((items)=>(items.id!=action.payload))
        },
        plusqty:(state,action)=>{
        return state.map((ele)=>(ele.id===action.payload.id?{...ele,qty:ele.qty+1}:ele))
        },
        subqty:(state,action)=>{
        return state.map((ele)=>(ele.id===action.payload.id?{...ele,qty:Math.max(ele.qty-1,0)}:ele))
        }
    }

})
export const {Additem,Removeitem,plusqty,subqty} = carslice.actions
export default carslice.reducer
import { createSlice } from "@reduxjs/toolkit";


export const Counterslice =createSlice( {
  name:'gudone',
  initialState:{
    value:[]
  },
  reducers:{
    addcart: (s) => {
        s.value = s.value.concat({name:'abc'})
    },
    // decrement: (s) => {
    //     s.value
    // },
  }
})
export const{addcart,decrement}=Counterslice.actions
export const selectcount =(s) =>s.gudone.value
export default Counterslice.reducer

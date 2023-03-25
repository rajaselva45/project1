  import { createSlice, current } from "@reduxjs/toolkit";
export const Counterslice = createSlice({
    name: 'selva',
    initialState: {
        cartVal:[],
        value: [],
        TotalAmount:0,
    }, 
    reducers: {
        addTocart: (state, action) => {
            const addcaart = state.cartVal.findIndex(
                (item) => item.id === action.payload.id
            
                ); 
                if(addcaart){
                    const cartitem={...action.payload,cartquantity:1};
                    state.cartVal.push(cartitem);
                }
                if(addcaart >=0 ){
                    state.cartVal.cartquantity +=1;
                } 
          
             
     
               

           

        },
        increment:(state,action)=>{
            let addcaart=[...current(state.cartVal)]
            let addcaart1=[addcaart.findIndex((item)=>item.id===action.payload.id)]
            state.cartVal[addcaart1].cartquantity +=1;
    
            state.TotalAmount=state.cartVal.reduce((total,item)=>{
                return total + Number(item.price) *Number(item.cartquantity );
            },0);
        },
        decrement:(state,action)=>{
            let addcaart=[...current(state.cartVal)];
            let addcaart1=addcaart.findIndex((item)=>item.id===action.payload.id);
            state.cartVal[addcaart1].cartquantity-=1;
 
            state.TotalAmount=state.cartVal.reduce((total,item)=>{
                return total + Number(item.price) * Number(item.cartQuantity);
            },0);
        
            if (state.cartVal[addcaart1].cartquantity <0){
                return (state.TotalAmount=0);
             }
            if (state.TotalAmount< 0){
                return (state.TotalAmount=0)
            }
        },
        handleRemove :(state,action)=>{
            const exitItem=state.cartVal.find((item)=>item.id===action.payload.id)
            if(exitItem){
                state.cartVal=state.cartVal.filter((item)=>item.id !==action.payload.id)
                state.TotalAmount=0;
            }
        },

        
    }, 
})

export const { addTocart, increment,decrement,handleRemove} = Counterslice.actions;
export const Total=(state)=>state.selva.TotalAmount;
export const imgClick=(state)=>state.selva.tempProduct;

export const selectcount = (state) => state.selva.value;
export const cartitem = (state) => state.selva.cartVal;
export default Counterslice.reducer;
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { handleRemove,decrement,increment,  } from '../redux/redux';
import { Total ,cartitem } from '../redux/redux';
import './cart.css'

function Cart() {
    const caaart=useSelector(cartitem)
    const dispatch=useDispatch()
    const Totalcart=useSelector(Total)
    
return(
     <div className='col-lg-12 d-flex p-5'>
        <div>
            {caaart.map((e)=>{
                return(
                    <div className='col-lg-6'>
                        <div className='p-4' id='cart-bar'>
                            <div>
                                <img src={e.url} width='300px ' alt='img'/>



                                </div>
                                <div id='bless'>
                                    <h4>{e.name}</h4>
                                    <button onClick={()=>dispatch(increment(e))}>plus</button>
                                    {<span className='red'>{e.cartQuantity}</span>}
                                    <button onClick={()=>dispatch(decrement(e))}>minus</button>
                                    <h3>
                                        price:${parseInt(e.price)*Number(e.cartQuantity)}
                                    </h3>
                                    <button>order now</button>
                                </div>
                                <div id='remove'>
                                    <button id='remo-btn' onClick={()=>dispatch(handleRemove(e))}>cancel</button>
                                </div>

                        </div>
                        <br></br>
                        <br></br>

                    </div>

                )
            })}

        </div>
        <div className='col-lg-6' id='tolbuimg'>
           <h3>total price</h3>
           <span>rs-{Totalcart}</span>
        </div>
     
     </div>
)
}
export default Cart












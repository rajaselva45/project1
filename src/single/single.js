import React from 'react'
import './single.css'
import sachin from '../component/New folder/u2.jpg'
import { Link } from 'react-router-dom'
function Dropdown() {
  return (
   
    <div>
      
<div class="about" id="About">
        <div class="about_main">

        
      <main class="flip">
  <section class="cardd">
    <div class="product-image">
      <img src={sachin} alt="OFF-white Red Edition" class="warn" draggable="false" />
      
    </div>
    <div class="product-info">
      <h2 className='bts' style={{fontSize:"30px",marginTop:'-25px'}} >Nike X OFF-white</h2>
      <p className='bts' style={{fontSize:'20px'}}>The 10: Air Jordan 1 off-white - Chicago</p>
      <div class="price">$999</div>
      <h2 className='bts'>rating 4.5</h2>
  <Link to="/cart"  > <button className='btsn'style={{fontSize:"15px"}}>add to cart</button></Link>
    </div>
    <div class="btn">
      
      
    </div>
  </section>
  
</main>

            <div class="about_text">
                <h1><span class="kushil">About</span>Us</h1>
                <h3>Why Choose us?</h3>
                <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita, est. Doloremque 
                    sapiente veritatis laboriosam corrupti optio et maxime. Ad, amet explicabo eaque labore 
                    cupiditate quasi nostrum nemo recusandae id quibusdam? Lorem ipsum dolor sit amet 
                    consectetur adipisicing elit. Doloremque ab, dolores pariatur cum exercitationem, illo nisi 
                    veritatis vitae ea deleniti fugiat quisquam tempora, accusantium corrupti excepturi optio. 
                    Inventore, cupiditate recusandae.
                </p>
            </div>

        </div>

        <a  class="about_btn">Order Now</a>
        <Link to='/nav' id='about_btn1' class="about_btn1">see related food's on menu</Link>


    </div>

         </div>
  )
}
export default Dropdown
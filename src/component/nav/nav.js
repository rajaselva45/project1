import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import Dropdown from '../../single/single';
import Food from '../data/data';
import SlideImage from '../footer/footer';
import SSS from '../mainpage/mainpage';
import Profile from '../profile/profile';
import { useState } from 'react';
import { cartitem } from '../redux/redux';
import './nav.css';


function Navbar() {
    const [openProfile,setOpenProfile]=useState(false);
    const history=useHistory()
    const kusil=useSelector(cartitem);
    
    function clickk(){
        return(
        history.push('/cart')
        )
    }
    
    
    return (

        <>
            <header id='top'>

                <a href='#' className='logo'>RK & RS RESTAURENT</a>
                <Profile />
                <nav className='navbar'>
                    <a className='active' href="#home">home</a>
                    <Link to='/food'>dishes</Link>
                    <Link to="foot">about</Link>
                    <Link to='/'>menu</Link> 
                    <Link to="/review">Review</Link>
                    <Link to="/cart">order</Link>
                
              
          
                
                    
                 <div className='add' onClick={()=>clickk()} >
                        <p id="diss" style={{marginLeft:"1rem" }}>{kusil.length}</p>
                    <img id="dis" src="https://th.bing.com/th/id/OIP.WEVWip-0lQL_VmbBkp5sUgHaHa?pid=ImgDet&w=5120&h=5120&rs=1" alt='cart-img' width='30px'/>
                    </div> 
                </nav>
                {/* <div className='icons'>
                    <i className="fa-solid fa-bars" id='menu-bars'></i>
                    <i className="fa-brands fa-searchengin" id='icon'></i>
                    <a href='#' className='fas  fa-heart'></a>
                    <a href='#' className='fas  fa-shopping-cart'></a>

                </div> */}
            </header>
            <div>
                 <SSS/> 
                {
                openProfile && <Profile />
                    
             
              }
                <Food />
                <SlideImage />
                
                

               
              <p><a href="top">go top</a> </p>

            </div>
        </>
    )
}





export default Navbar

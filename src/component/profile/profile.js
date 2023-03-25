import React from 'react'
import { AiOutlineLogin } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './profile.css'
import { AiFillBank } from "react-icons/ai";
import { AiOutlineBars } from "react-icons/ai";
import { AiOutlineClose } from "react-icons/ai";
import { FaUser  } from "react-icons/fa";
import { FaUserCog } from "react-icons/fa";
import {  TbArrowBarLeft} from "react-icons/tb";
import { FiTruck } from "react-icons/fi";

function Profile() {
  
  return (
    <>
    
    <input type='checkbox' id='check' ></input>
    <label for="check">< AiOutlineBars id='es1' fontSize="30px" />
    <AiOutlineClose id='cancel' fontSize="30px" /></label>
    <div className='sidebar'>
      
            <h2 id="wel">welcome</h2>
            
            
                    <ul>
                      
                  {/* <li><a href='#'>  <AiFillBank   fontSize="20px"   />home</a></li> */}
                   <li><Link to='/loginn'>  <AiOutlineLogin fontSize="30px" />login</Link></li>
   
     
                   <li><Link to='/regis'>  <FaUser fontSize="20px"  /> Sign up</Link></li>
                   <li><a href='#'>  <FaUserCog fontSize="20px"  /><span></span>Setting</a></li>
                  <li><Link to='/cart'>  <FiTruck fontSize="20px" /> <span></span>orders</Link></li>
                  <li><Link to='/foot'>  <FaPhoneAlt fontSize="20px" /><span></span> more details</Link></li>
                  <li><Link href='/nav'>  <TbArrowBarLeft fontSize="20px" /><span></span> Exit</Link></li>
                    </ul>
    </div>
    <section></section>
    </>
  )
}

export default Profile

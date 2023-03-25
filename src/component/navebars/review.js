import React from 'react'
import './review.css'
import Star1 from '../New folder/review_1.png'
import Star2 from '../New folder/review_2.png'
import Star3 from '../New folder/review_3.png'
import Star4 from '../New folder/review_4.png'


function Review() {
  return (
    <>
     <header>

<a href='#' className='logo'>RK & RS RESTAURENT</a>
<nav className='navbar'>
    <a className='active' href="#home">home</a>
    <a href="#dishes">dishes</a>
    <a href="#about">about</a>
    <a href="#menu">menu</a>
    <a href='review'>review</a>
    <a href="#order">order</a>
    {/* <div id="profile">
  <a> <img  style={{width:'40px',marginLeft:'800px'}} id="img-2" onClick={()=>setOpenProfile((prev)=>!prev)} 
  src="https://images.pexels.com/photos/3105572/pexels-photo-3105572.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="profileimage"></img></a> 
</div> */}
    {/* <span>{cartitem.length}</span> */}
    {/* <div className='add' onClick={()=>clickk()} >
        <p id="diss" style={{marginLeft:"1rem" }}>{kusil.length}</p> */}
    {/* <img id="dis" src="https://th.bing.com/th/id/OIP.WEVWip-0lQL_VmbBkp5sUgHaHa?pid=ImgDet&w=5120&h=5120&rs=1" alt='cart-img' width='30px'/>
    </div> */}
</nav>
<div className='icons'>
    <i className="fa-solid fa-bars" id='menu-bars'></i>
    <i className="fa-brands fa-searchengin" id='icon'></i>
    <a href='#' className='fas  fa-heart'></a>
    <a href='#' className='fas  fa-shopping-cart'></a>

</div>
</header>

<div>
<br></br>
<br></br>
<br></br>
<br></br>
<hr/>

<div class="review" id="Review">
        <h1>Customer<span>Review</span></h1>

        <div class="review_box">
            <div class="review_card">

                <div class="review_profile">
                    <img src={Star1}/>
                </div>

                <div class="review_text">
                    <h2 class="name">John Deo</h2> 
               <div className='wtff'>
                    <div  class="review_icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>
                    </div>

                    <div class="review_social">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quam facere 
                        blanditiis in fugiat tempore necessitatibus aliquid. Id adipisci, rem corrupti 
                        asperiores distinctio delectus quae quia tenetur totam laboriosam quam. Lorem ipsum, 
                        
                    </p>

                </div>

            </div>

            <div class="review_card">

                <div class="review_profile">
                    <img src={Star2}/>
                </div>

                <div class="review_text">
                    <h2 class="name">John Deo</h2>

                    <div class="review_icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>

                    <div class="review_social">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quam facere 
                        blanditiis in fugiat tempore necessitatibus aliquid. Id adipisci, rem corrupti 
                        asperiores distinctio delectus quae quia tenetur totam laboriosam quam. Lorem ipsum, 
                        
                    </p>

                </div>

            </div>

            <div class="review_card">

                <div class="review_profile">
                    <img src={Star3}/>
                </div>

                <div class="review_text">
                    <h2 class="name">John Deo</h2>

                    <div class="review_icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>

                    <div class="review_social">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quam facere 
                        blanditiis in fugiat tempore necessitatibus aliquid. Id adipisci, rem corrupti 
                        asperiores distinctio delectus quae quia tenetur totam laboriosam quam. Lorem ipsum, 
                       
                    </p>

                </div>

            </div>

            <div class="review_card">

                <div class="review_profile">
                    <img src={Star4}/>
                </div>

                <div class="review_text">
                    <h2 class="name">John Deo</h2>

                    <div class="review_icon">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star-half-stroke"></i>
                    </div>

                    <div class="review_social">
                        <i class="fa-brands fa-facebook-f"></i>
                        <i class="fa-brands fa-instagram"></i>
                        <i class="fa-brands fa-twitter"></i>
                        <i class="fa-brands fa-linkedin-in"></i>
                    </div>

                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus quam facere 
                        blanditiis in fugiat tempore necessitatibus aliquid. Id adipisci, rem corrupti 
                        asperiores distinctio delectus quae quia tenetur totam laboriosam quam. Lorem ipsum, 
                    </p>

                </div>

            </div>

        </div>

    </div>

    </div>
    </>
  )
}

export default Review
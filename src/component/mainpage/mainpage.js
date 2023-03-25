import React from 'react'
import './mainpage.css'
import vid from '../New folder/rk.mp4'
import Moving from '../redux/deals'
// import Carousel from 'react-bootstrap/Carousel';
function SSS() {
  return (
    <div>
      <em>
        <div className="nav">
                <div className="logoo"></div>
                <div>
                    <h4 className="app">Get The App!</h4>
                </div>
                <ul className="nav-bar">
                    <li>Add Restaurant </li>
                    <li>Login</li>
                    <li>sign up</li>
                    <i id="lo" class="fa-solid fa-cart-shopping"></i>
                </ul>
            </div> 
            <div className="head">
              <h1 id="store">RK</h1>
            <h2>Discover The Bsest Food & Drinks In Thiruvallur Near</h2>
            <div className="search">
            <i className="fa-solid fa-location-dot"></i>
              <p>ywca, 2, Udayar Rd, mirzapur,up</p>
              <i className="fa-solid fa-magnifying-glass"></i>
              <input type="text" placeholder='serach for a restaurant , cuisine or a dish'></input>
              {/* <div class="register" id="register"></div> */}
              <video autoPlay loop muted playsInline class="back-video">
              <source src={vid}  type="video/mp4"  alt='vid'/></video>
            </div>
            </div>
            </em>


              {/* Caurosal */}

{/* 
            <div className="pt-3" class="pt-3">
             <Carousel>
                    <Carousel.Item>
                        <img id="slide"
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/10580198/pexels-photo-10580198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h2>Indian Foods</h2>
                            <p>i like this food and more dishes and also like ....</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img id="slide"
                            className="d-block w-100"
                            src="https://restaurantclicks.com/wp-content/uploads/2021/10/indian-cuisine.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2>Indian Foods</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img id="slide"
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/8746403/pexels-photo-8746403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h2>Indian Foods</h2>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img id="slide"
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/1161682/pexels-photo-1161682.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2>Chinese Foods</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img id="slide"
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/7363753/pexels-photo-7363753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2>Chinese Foods</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img id="slide"
                            className="d-block w-100"
                            src="https://images.pexels.com/photos/12669951/pexels-photo-12669951.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h2>Chinese Foods</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel> */}
        {/* </div>             */}
        <div>
            <Moving/>
        </div>
    </div>
   

  )
}

export default SSS

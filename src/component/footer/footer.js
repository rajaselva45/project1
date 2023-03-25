import React from "react";
 import { Link } from "react-router-dom";
// import Header from "../main/mainpage";
// import Carousel from 'react-bootstrap/Carousel';
import './footer.css'
function SlideImage(){
    return(<>
    {/* footer */}


 <footer>
        <div className="footer_main">

            <div className="footer_tag">
                <h2>Location</h2>
                <p id="pp">Sri Lanka</p>
                <p id="pp">USA</p>
                <p id="pp">India</p>
                <p id="pp">Japan</p>
                <p id="pp">Italy</p>
            </div>

            <div className="footer_tag">
                <h2>Quick Link</h2>
                <p id="pp"><Link to=''>Home</Link></p>
                <p id="pp">About</p>
                <p id="pp">Menu</p>
                <p id="pp">Gallary</p>
                <p id="pp">Order</p>
            </div>

            <div className="footer_tag">
                <h2>Contact</h2>
                <p id="pp">+94 12 3456 789</p>
                <p id="pp">+94 25 5568456</p>
                <p id="pp">johndeo123@gmail.com</p>
                <p id="pp">foodshop123@gmail.com</p>
            </div>

            <div className="footer_tag">
                <h2>Our Service</h2>
                <p id="pp">Fast Delivery</p>
                <p id="pp">Easy Payments</p>
                <p id="pp">24 x 7 Service</p>
            </div>
            <div className="footer_tag">
                <h2>Follows</h2>
                <i className="fa-brands fa-facebook-f"></i>
                <i className="fa-brands fa-twitter"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-linkedin-in"></i>
            </div>
        </div>
        <p className="end">Design by<span><i class="fa-solid fa-face-grin"></i> Designed By R.K & R.S</span></p>
    </footer>
    </>
    )

}
export default SlideImage
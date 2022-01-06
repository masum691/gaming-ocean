import React from 'react';
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>
            <div className='row container mx-auto'>
                <div className='col-sm-12 col-md-6 col-lg-3'>
                    <h2>Gaming ocean</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <p>gaming@gmail.com</p>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3'>
                    <h6 className='ms-4'>Quick Links</h6>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Portfolio</li>
                        <li>News</li>
                        <li>Terms and condition</li>
                    </ul>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3'>
                    <h6>Contact us</h6>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum minima unde nisi!</p>
                    <p>+09234232378</p>
                </div>
                <div className='col-sm-12 col-md-6 col-lg-3 '>
                    <h6>Connect with us</h6>
                    <div className='mt-3'>
                        <i class="fab fa-facebook-square fs-3 me-2"></i>
                        <i class="fab fa-linkedin fs-3 me-2"></i>
                        <i class="fab fa-twitter-square fs-3 me-2"></i>
                        <i class="fab fa-youtube-square fs-3 me-2"></i>
                    </div>
                </div>
            </div>
            <hr />
            <p className='text-center'>&copy; Copyright by gaming ocean</p>
        </div>
    );
};

export default Footer;
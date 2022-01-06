import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div className='nav-container'>
            <div className='row container mx-auto align-items-center'>
                <div className='col-sm-12 col-lg-6 gaming-logo'>
                    <h4><span className='gam'>Gam</span>ing ocean</h4>
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <nav>
                        <ul className='d-flex align-items-center'>
                            <li>Home</li>
                            <li className='nav-page'>About us</li>
                            <li className='nav-page'>Portfolio</li>
                            <li className='nav-page'>News</li>
                            <li className='nav-page'>Contact us</li>
                            <button>Login</button>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
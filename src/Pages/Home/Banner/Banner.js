import React from 'react';
import consol from '../../../images/gaming-consol.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner-container'>
            <div className='row container mx-auto justify-content-center align-items-center'>
                <div className='col-sm-12 col-lg-6'>
                    <h6>3D GAME DEV</h6>
                    <h1>Work that we produce for our clients</h1>
                    <p>I have a love-hate relationship with survival games. I'll get deep into them for a good long while before abruptly realizing I am sick of chopping down trees. And then I'll go cold on the genre for a while.</p>
                    <button>Get more details</button>
                </div>
                <div className='col-sm-12 col-lg-6'>
                    <img className='img-fluid' src={consol} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Banner;
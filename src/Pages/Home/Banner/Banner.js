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
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. A ipsam, quas, sunt aut ullam, voluptas nostrum ea provident ipsa quod fugiat. Natus mollitia quisquam.</p>
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
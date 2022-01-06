import React from 'react';
import './Category.css'
import bg from '../../../images/wall2.png'

const Category = () => {
    return (
        <div className='category-container' style={{ backgroundImage: `url(${bg})` }}>
            <div className='game-category'>
                <div className='container mx-auto'>
                    <h2 className='text-center w-75 mx-auto'>Videogames were an explosion of colour in an otherwise grey year</h2>
                    <p className='text-center w-75 mx-auto mt-4'>Games have gotten really bloody good at rendering the real world. But I'm so much more excited to see how graphical advances can be turned to create the impossible.</p>
                </div>
                <div className='mt-5 game-category-items'>
                    <div class="container mx-auto row row-cols-1 row-cols-md-4 g-4 text-center">
                        <div class="col">
                            <i class="fas fa-mobile-alt fs-2"></i>
                            <h6 className='mt-3'>Mobile Game Development</h6>
                            <i class="this-arrow fas fa-arrow-right"></i>
                        </div>
                        <div class="col">
                            <i class="fas fa-laptop-code fs-2"></i>
                            <h6 className='mt-3'>PC Game Development</h6>
                            <i class="this-arrow fas fa-arrow-right"></i>
                        </div>
                        <div class="col">
                            <i class="fab fa-steam-square fs-2"></i>
                            <h6 className='mt-3'>PS4 Game Development</h6>
                            <i class="this-arrow fas fa-arrow-right"></i>
                        </div>
                        <div class="col">
                            <i class="fab fa-artstation fs-2"></i>
                            <h6 className='mt-3'>AR/VR Solution</h6>
                            <i class="this-arrow fas fa-arrow-right"></i>
                        </div>
                    </div>
                    <div class="container mx-auto row row-cols-1 row-cols-md-4 g-4 text-center mt-4">
                        <div class="col">
                            {/* <i class="fas fa-mobile-alt"></i> */}
                        </div>
                        <div class="col">
                            <i class="fab fa-sketch fs-2"></i>
                            <h6 className='mt-3'>AR/VR Design</h6>
                            <i class="this-arrow fas fa-arrow-right"></i>
                        </div>
                        <div class="col">
                            <i class="fab fa-unity fs-2"></i>
                            <h6 className='mt-3'>Unity Development</h6>
                            <i class="this-arrow fas fa-arrow-right"></i>
                        </div>
                        <div class="col">
                            {/* <i class="fab fa-artstation"></i> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Category;
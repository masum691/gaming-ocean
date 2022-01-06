import React from 'react';
import './DisplayGames.css'
import one from '../../../images/gam1.png'
import two from '../../../images/gam2.png'
import three from '../../../images/gam3.png'
import four from '../../../images/gam4.png'
import wall from '../../../images/wall.png'

const DisplayGames = () => {
    return (
        <div className='display-game'>
            <div className='container mx-auto d-lg-flex justify-content-between px-5'>
                <div>
                    <h4>Currently Trending Games</h4>
                </div>
                <div className='see-more'>
                    <button>SEE ALL</button>
                </div>
            </div>
            <div>
                <div class="container mx-auto row row-cols-1 row-cols-md-4 g-4 mt-3">
                    <div class="col">
                        <div class="display-card card h-100 border-0">
                            <img className='img-fluid display-game-img rounded' src={one} class="card-img-top" alt="..." />
                            <h6 className='text-center mt-2'><i class="fab fa-free-code-camp me-1"></i> Followers 123</h6>
                        </div>
                    </div>
                    <div class="col">
                        <div class="display-card card h-100 border-0">
                            <img className='img-fluid display-game-img rounded' src={two} class="card-img-top" alt="..." />
                            <h6 className='text-center mt-2'><i class="fab fa-free-code-camp me-1"></i> Followers 533</h6>
                        </div>
                    </div>
                    <div class="col">
                        <div class="display-card card h-100 border-0">
                            <img className='img-fluid display-game-img rounded' src={three} class="card-img-top" alt="..." />
                            <h6 className='text-center mt-2'><i class="fab fa-free-code-camp me-1"></i> Followers 734</h6>
                        </div>
                    </div>
                    <div class="col">
                        <div class="display-card card h-100 border-0">
                            <img className='img-fluid display-game-img rounded' src={four} class="card-img-top" alt="..." />
                            <h6 className='text-center mt-2'><i class="fab fa-free-code-camp me-1"></i> Followers 234</h6>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <h2 className='text-center container mx-auto w-50 mt-5'>2022 delivered some big twists to the familiar survival game formula</h2>
            </div>
            <div className='container mx-auto mt-5'>
                <h4>Survival game</h4>
                <p className='w-50'>It was a great year for survival thanks to a number of games that changed up some familiar systems.</p>
                <div>
                    
                </div>
                <div class="card h-100 border-0">
                <img className='img-fluid rounded' src={wall} alt="" />
                </div>
            </div>
        </div>
    );
};

export default DisplayGames;
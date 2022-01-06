import React from 'react';
import one from '../../../images/pro1.png'
import two from '../../../images/pro2.png'
import three from '../../../images/pro3.png'
import four from '../../../images/pro4.png'
import five from '../../../images/pro5.png'
import six from '../../../images/pro6.png'
import './Projects.css'

const Projects = () => {
    return (
        <div className='project-container'>
            <div>
                <h4 className='text-center'>Our recent projects</h4>
                <p className='text-center w-50 mx-auto mt-3 mb-5'>Recently we have completed some projects.  The holidays are a great time to catch up on games you missed or revisit old favorites.</p>
            </div>
            <div>
                <div class="container mx-auto row row-cols-1 row-cols-md-3">
                    <div class="col">
                        <img className='img-fluid' src={one} alt="" />
                    </div>
                    <div class="col">
                        <img className='img-fluid' src={two} alt="" />
                    </div>
                    <div class="col">
                        <img className='img-fluid' src={three} alt="" />
                    </div>
                    <div class="col">
                        <img className='img-fluid' src={four} alt="" />
                    </div>
                    <div class="col">
                        <img className='img-fluid' src={five} alt="" />
                    </div>
                    <div class="col">
                        <img className='img-fluid' src={six} alt="" />
                    </div>
                </div>
                <div className='see-more text-center mt-4'>
                    <button>SEE ALL</button>
                </div>
                <div className='container mx-auto mt-5'>
                    <h4>Enjoy gaming</h4>
                    <p>A top-down twin-stick shooter with some action-RPG in its DNA,<br /> The Ascent didn't need to look gorgeous.</p>
                </div>
                <div className='container d-lg-flex justify-content-between form-container align-items-center'>
                    <div>
                        <h4>Stay in the loop</h4>
                        <p>Send us your email and do subscribe and connect with us.</p>
                    </div>
                    <div>
                        <input type="text" placeholder='Email address' />
                        <button>Continue</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
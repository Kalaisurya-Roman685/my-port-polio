import React from 'react'
import Testimonials from './compoents/Testimonials';
import './styles/About.scss';
function About() {
    return (
        <div className='about-section'>
            <div className='about-inside-sections'>
                <div className='about mt-3'>
                    <h1>About Me</h1>
                </div>
                <div className='inside-about-section'>
                    <div className='left-about-section'>
                        <Testimonials />
                    </div>
                    <div className='right-about-section'>
                        <div className='about-text mt-5'>

                            <div>
                                <h3 className='heres mb-4'>Here Are A few Highlights:</h3>
                                <div className='split-here mb-3'>

                                    <div className='empty-circle'>
                                        <ion-icon name="checkmark-done-circle-outline"></ion-icon>
                                    </div>

                                    <div className='text-here'>
                                        <span> React Developer And NextJs Developer in Web.</span>
                                    </div>
                                </div>
                                <div className='split-here mb-3'>
                                    <div className='empty-circle'>
                                        <ion-icon name="checkmark-done-circle-outline"></ion-icon>
                                    </div>
                                    <div className='text-here'>
                                        <span>Interactive Front End As Per The Design.</span>
                                    </div>
                                </div>
                                <div className='split-here mb-3'>
                                    <div className='empty-circle'>
                                        <ion-icon name="checkmark-done-circle-outline"></ion-icon>
                                    </div>
                                    <div className='text-here'>
                                        <span> React and Nextjs And UI/UX etc...</span>
                                    </div>
                                </div>
                                <div className='split-here mb-3'>
                                    <div className='empty-circle'>
                                        <ion-icon name="checkmark-done-circle-outline"></ion-icon>
                                    </div>
                                    <div className='text-here'>
                                        <span>Redux and Context Api for State Management.</span>
                                    </div>
                                </div>
                                <div className='split-here mb-3'>
                                    <div className='empty-circle'>
                                        <ion-icon name="checkmark-done-circle-outline"></ion-icon>
                                    </div>
                                    <div className='text-here'>
                                        <span>Building API's And REST API in Reactjs and Nextjs.</span>
                                    </div>
                                </div>
                                <div className='split-here mb-3'>
                                    <div className='empty-circle'>
                                        <ion-icon name="checkmark-done-circle-outline"></ion-icon>
                                    </div>
                                    <div className='text-here'>
                                        <span>Managing ui and ux designs and Mobile Responsive.</span>
                                    </div>
                                </div>
                                <div className='split-here'>
                                    <div className='empty-circle'>
                                        <ion-icon name="checkmark-done-circle-outline"></ion-icon>
                                    </div>
                                    <div className='text-here'>
                                        <span>Web use Bootstrap,Material UI and Chakra UI, FontAwesome.</span>
                                    </div>
                                </div>
                                <div className='buttons mt-4'>
                                    <span>
                                        <button className='hireme'>Hire Me</button>
                                    </span>
                                    <span>
                                        <button className='getresume'>Get Resume</button>
                                    </span>
                                </div>
                                <div>
                                    <i class="fa-solid fa-star stars1"></i>
                                </div>
                                <div>
                                    <i class="fa-solid fa-star stars2"></i>
                                </div>
                                <div>
                                    <i class="fa-solid fa-star stars3"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
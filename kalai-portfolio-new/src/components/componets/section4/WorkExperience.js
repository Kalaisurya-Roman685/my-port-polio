import React from 'react'
import './styles/WorkExperience.scss';
import works from '../../../assets/kalai-port/workexperience.svg';
function WorkExperience() {
    return (
        <div className='work-experinec-main'>
            <div className='inside-works'>
                <div className='left-workexperience'>
                    <img src={works} className="work-image" />
                </div>
                <div className='right-workexperience'>
                    <div className='split-num mt-5 mb-4'>
                        <div>
                            <h2 className='work'>Work Experience</h2>
                        </div>
                        <div className='numbers'>
                            <span className='num'>2021-2022</span>
                        </div>
                    </div>
                    <div className='inside-etxtbox'>
                        <span className='icons'><i class="fa-solid fa-circle-dot"></i></span>
                        <span className='experiencetexts'>Reactjs web development working in 1.4 years of experience.</span>
                    </div>
                    <div className='inside-etxtbox mt-3'>
                        <span className='icons'><i class="fa-solid fa-circle-dot"></i></span>
                        <span className='experiencetexts'>UI/UX, Restful API, Performance Checking, documentation.</span>
                    </div>
                    <div className='inside-etxtbox mt-3'>
                        <span className='icons'><i class="fa-solid fa-circle-dot"></i></span>
                        <span className='experiencetexts'>Creating code structure and components, coupling them together into a functional app.</span>
                    </div>
                    <div className='inside-etxtbox mt-3'>
                        <span className='icons'><i class="fa-solid fa-circle-dot"></i></span>
                        <span className='experiencetexts'>Delivering a complete front-end application Writing tested, and documented JavaScript, HTML and CSS/CSS3,Sass,Bootstrap.</span>
                    </div>
                    <div className='inside-etxtbox mt-3'>
                        <span className='icons'><i class="fa-solid fa-circle-dot"></i></span>
                        <span className='experiencetexts'>Creating Responsive Web Design with cross browser compatibility.</span>
                    </div>
                    <div className='inside-etxtbox mt-3'>
                        <span className='icons'><i class="fa-solid fa-circle-dot"></i></span>
                        <span className='experiencetexts'>Developed Custom Redux Form script for updating Redux store using immutable and Redux Thunk and ContextApi use store datas and provide all component datas in contextApi.</span>
                    </div>
                    <div className='inside-etxtbox mt-3'>
                        <span className='icons'><i class="fa-solid fa-circle-dot"></i></span>
                        <span className='experiencetexts'>Knowledge and experience integrating web apps with back-end using REST API’s.Knowledge in VSCode like GitHub.</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default WorkExperience
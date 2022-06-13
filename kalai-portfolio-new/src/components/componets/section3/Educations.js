import React from 'react'
import './styles/Educations.scss';
import education from '../../../assets/kalai-port/edu.png';
function Educations() {
    return (
        <div className='Education-main'>
            <div className='insoide-education'>
                <div className='left-education'>
                    <div className='inside-educations'>
                        <h1 className='edu mt-5'>Educations</h1>
                        <div className='first-edu mt-5 mb-5'>
                            <div className='left-edu'>
                                <div className='d-flex gap-3 masters'>
                                    <span><i class="fa-solid fa-user-graduate"></i></span>
                                    <span>Master Degree</span>
                                </div>
                                <h4 className='mca mt-3'>MCA - (Master Of Computer Application)</h4>
                                <h5 className='mt-3 kar'>Karpagam Academy Of Higher Education</h5>
                            </div>
                            <div className='right-edu'>
                                <div className='inside-box-round'>
                                    2018-2020
                                </div>
                            </div>
                        </div>
                        <div className='first-edu mt-5'>
                            <div className='left-edu'>
                                <div className='d-flex gap-3 masters'>
                                    <span><i class="fa-solid fa-user-graduate"></i></span>
                                    <span>Bachelor Degree</span>
                                </div>
                                <h4 className='mca mt-2'>BCA - (Bachelor Of Computer Application)</h4>
                                <h5 className='mt-3 kar'>Sri Vidya Mandir Art And Science College</h5>
                            </div>
                            <div className='right-edu'>
                                <div className='inside-box-round'>
                                    2015-2018
                                </div>
                            </div>
                        </div>

                        <div className='first-edu mt-5'>
                            <div className='left-edu'>
                                <div className='d-flex gap-3 masters'>
                                    <span><i class="fa-solid fa-user-graduate"></i></span>
                                    <span>High School</span>
                                </div>
                                <h4 className='mca mt-3'>HSC - (Higher Secondary School)</h4>
                                <h5 className='mt-3 kar'>Government Boys Higher Secondary School</h5>
                            </div>
                            <div className='right-edu'>
                                <div className='inside-box-round'>
                                    2013-2015
                                </div>
                            </div>
                        </div>

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
                <div className='right-education'>
                    <div className='dummy'>

                    </div>
                    <img src={education} className="rounds" />
                </div>
            </div>
        </div>
    )
}

export default Educations
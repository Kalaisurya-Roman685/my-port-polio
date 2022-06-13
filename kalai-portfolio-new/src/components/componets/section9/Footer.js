import React from 'react'
import waves from '../../../assets/kalai-port/newwave.svg';
import './styles/Footer.scss';
import last from '../../../assets/kalai-port/redux .png';

function Footer() {
    return (
        <div className='footer-main'>
            <img src={waves} alt="no Waves" className='wave' />
            <div>
                <img src={last} alt="no images" className='lasts' />
            </div>
            <div className='copy'>
                <span className='copys'> Copyright 2021 PortFolio Inc. All rights Reserved</span>
            </div>
            <div>
                <div>
                    <i class="fa-solid fa-star stars1"></i>
                </div>
                <div>
                    <i class="fa-solid fa-star stars2"></i>
                </div>
                <div>
                    <i class="fa-solid fa-star stars3"></i>
                </div>
                <div>
                    <i class="fa-solid fa-star stars4"></i>
                </div>
                <div>
                    <i class="fa-solid fa-star stars5"></i>
                </div>
            </div>
        </div>
    )
}

export default Footer
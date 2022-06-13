import React, { useState } from 'react'
import './styles/Project.scss';
import Slider from "react-slick";
import DatasProviders from './Data';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Projectjs() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3500,
        pauseOnHover: true
    };


    const [empty, SetEmpty] = useState([]);

    const GetUserDatas = (id) => {
        DatasProviders.ProjectData.forEach((element, index) => {
            if (element.id === id) {
                SetEmpty(element);
            }
        })
    }
    return (
        <div className='main-projects'>
            <h1 className='ms-5 pro'>Projectjs</h1>
            {/* <ToastContainer/> */}
            <div className='container slik-sliders my-auto mt-5'>
                <Slider {...settings}>

                    {DatasProviders.ProjectData.map((item, index) => {
                        return (
                            <div className='slide-inside mx-auto h-100'>
                                <div
                                    className="card col-lg-11 col-xs-12 text-center"
                                >
                                    <div>
                                        <i class="fa-solid fa-star stars1"></i>
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-star stars2"></i>
                                    </div>
                                    <div>
                                        <i class="fa-solid fa-star stars3"></i>
                                    </div>
                                    <h1 className='ims'>{item.image}</h1>
                                   
                                    <h1 className='camp mt-2'>{item.name}</h1>
                                    {/* <h1 className='lan mt-2'>{item.Language}</h1> */}
                                    <span className='des mt-2'>{item.Description}</span>
                                    {/* <div className='dur '>
                                        {item.Duration}
                                    </div> */}
                                    <button className='itm-btn mt-4'>{item.Duration}</button>

                                </div>
                            </div>
                        )
                    })}


                </Slider>
            </div>

            <div className='blurs'>

            </div>
            <div className='blurs1'>

            </div>

        </div>
    )
}

export default Projectjs
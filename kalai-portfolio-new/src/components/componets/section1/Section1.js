


import sm1 from "../../../assets/kalai-port/sm1.png";
import sm2 from "../../../assets/kalai-port/sm2.png";
import sm3 from "../../../assets/kalai-port/sm3.png";
import sm4 from "../../../assets/kalai-port/sm4.png";


import purush from "../../../assets/kalai-port/kal-imag1.png";
import Mobilesection1 from "./components/mobilesection1/Mobilesection1";

import { Link } from "react-scroll";
import profile from "../../../assets/kalai-port/profile.png";
import settings from "../../../assets/kalai-port/settings -kalai.png";
import Aboutus from "../../../assets/kalai-port/abouts.png";
import chats from "../../../assets/kalai-port/chats.png";
import developers from "../../../assets/kalai-port/developer.png";
import services from "../../../assets/kalai-port/services.png";
import active from "../../../assets/kalai-port/activities.png";
import React from "react";
import "./styles/Section1.scss";

import vts2 from "../../../assets/kalai-port/vts2.gif";
import { useHistory } from "react-router-dom";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Typewriter from 'typewriter-effect';
function Section1({ color, dark, setdark }) {
    const history = useHistory();
    const ContactTest = () => toast(`ContactMe:8778377119`);
    return (
        <>
            <div className="main-home-page">
                <ToastContainer />
                <div className="inside-home-page">
                    <div className="top-navbars">
                        <div className="name-section">
                            kalaisurya
                        </div>
                        <div className="list-section">
                            <span>
                                Home
                            </span>
                            <span>
                                About
                            </span>
                            <span>
                                Testimonials
                            </span>
                            <span>
                                Contactus
                            </span>
                        </div>
                        <div className="dark-section">
                            <div class="App App--Day" id="app" >
                                <label for="switch" class="Switch">
                                    <input id="switch" type="checkbox" class="Switch__CheckBox" onClick={() => setdark(!dark)} />
                                    <span class="Switch__Label Switch__Label--Day">DAY</span>
                                    <div class="Switch__Slider">
                                        <div class="Switch__SliderDot"></div>
                                    </div>
                                    <span class="Switch__Label Switch__Label--Night">NIGHT</span>
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="another-section-split">
                        <div className="left-section1-home">
                            <div className="image1">
                                <img src={vts2} className="section-image" />
                            </div>
                            <div className="text-button-section mt-5">
                                <h1
                                    className="hy mb-1"
                                    style={{
                                        color: color,
                                        fontWeight: 700,
                                        zIndex: 800000000000000000000000000000000000000000000000000000000000000,
                                        position: "relative",
                                    }}
                                >
                                    Hello I'Am
                                </h1>
                                <div>
                                    <h3 className="kalais">Kalaisurya</h3>
                                </div>
                                <div className='typesection mb-2 mt-2'>
                                    <Typewriter
                                        options={{
                                            strings: ['React Developer 😀', "NextJs Developer 😃", "Javascript 😄", "React Native 😁", "UI and UX 😄"],
                                            autoStart: true,
                                            loop: true,

                                        }}
                                    />
                                </div>
                                <div>
                                    <p className='build mt-4 mb-4'> A  Building Applications with Front End Developer Operations</p>
                                </div>
                                <div className='socialicons mt-3'>
                                    <span><ion-icon name="logo-facebook"></ion-icon></span>
                                    <span><ion-icon name="logo-google"></ion-icon></span>
                                    <span><ion-icon name="logo-instagram"></ion-icon></span>
                                    <span><ion-icon name="logo-linkedin"></ion-icon></span>
                                    <span><ion-icon name="logo-twitter"></ion-icon></span>
                                </div>
                                <button className="hire mt-4" onClick={ContactTest}>
                                    Contact{" "}
                                    <span
                                        style={{ color: color, fontWeight: 700 }}
                                        className="ms-2"
                                    >
                                        Me
                                    </span>
                                </button>
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
                        <div className="right-section1-home">
                            <div className="purush">
                                <img src={purush} className="purushed" />
                            </div>
                            <div className="profile">
                                <Link to="profile">
                                    <img src={profile} className="profiles" />
                                </Link>
                            </div>
                            <div className="settings-kalai">
                                <Link to="acitivities">
                                    <img
                                        src={active}
                                        alt="no"
                                        className="settings-kalais"
                                    />
                                </Link>
                            </div>
                            <div className="about">
                                <Link to="abouts">
                                    <img
                                        src={Aboutus}
                                        to="about"
                                        alt="no"
                                        className="abouts-kalai"
                                    />
                                </Link>
                            </div>
                            <div className="chats">
                                <Link to="chat">
                                    <img
                                        src={chats}
                                        alt="no"
                                        className="chats-kalai"
                                    />
                                </Link>
                            </div>
                            <div className="developers">
                                <Link to="projects">
                                    <img
                                        src={developers}
                                        alt="no"
                                        className="developers-kalai"
                                    />
                                </Link>
                            </div>
                            <div className="services">
                                <Link to="service">
                                    <img
                                        src={services}
                                        alt="no"
                                        className="services-kalai"
                                    />
                                </Link>
                            </div>

                            <div className="smile1">
                                <img src={sm1} className="smiles" />
                            </div>

                            <div className="smile3">
                                <img src={sm3} className="smiles2" />
                            </div>
                            <div className="smile4">
                                <img src={sm4} className="smiles3" />
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


        </>
    );
}

export default Section1;

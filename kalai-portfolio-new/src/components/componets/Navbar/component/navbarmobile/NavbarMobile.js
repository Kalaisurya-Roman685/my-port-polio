import React from "react";
import "./styles/NavbarMobile.scss";
import darkmode from "../../../../../assets/kalai-port/m2 dark.png";
import lightmode from "../../../../../assets/kalai-port/m1 light.png";
import sm5 from "../../../../../assets/kalai-port/sm5.png";
import { Link } from "react-scroll";
function NavbarMobile({ dark, setdark, color }) {
    return (
        <div className="mobile navbar d-block d-lg-none">
            <div className="inside-navbars d-flex justify-content-between ms-3">
                <h1 className="mt-2">
                    Hi{" "}
                    <span style={{ color: color }}>
                        kalai!{" "}
                        <span>
                            <img
                                src={sm5}
                                style={{
                                    width: "50px",

                                    transform: "rotate(-20deg)",
                                    objectFit: "cover",
                                }}
                            />
                        </span>
                    </span>
                </h1>
                <span
                    class="btn"
                    type="button"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight1"
                    aria-controls="offcanvasRight"
                >
                    <ion-icon
                        name="reorder-four-outline"
                        style={{
                            width: "40px",
                            height: "40px",
                            float: "right",
                            color: "orange",
                            fontWeight: "800",
                        }}
                    ></ion-icon>
                </span>

                <div
                    class="offcanvas offcanvas-end"
                    tabindex="-1"
                    id="offcanvasRight1"
                    aria-labelledby="offcanvasRightLabel"
                >
                    <div class="offcanvas-header">
                        <h1>Hi!</h1>
                        <button
                            type="button"
                            class="btn-close text-rese"
                            data-bs-dismiss="offcanvas"
                            aria-label="Close"
                            style={{
                                color: "orange",
                                fontWeight: "800",
                            }}
                        ></button>
                    </div>
                    <div class="offcanvas-body">
                        <ul class="navbar-nav mx-auto mb-2 mb-lg-0 gap-5">
                            <li class="nav-item">
                                <Link class="nav-link" to="home">
                                    <span style={{ color: color }}>Ho</span>
                                    me
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="about">
                                    <span style={{ color: color }}>About</span>
                                    us
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="serice">
                                    <span style={{ color: color }}>Ski</span>
                                    lls
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="chat">
                                    <span style={{ color: color }}>Ch</span>
                                    at
                                </Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="contact">
                                    <span style={{ color: color }}> Cont</span>
                                    act
                                </Link>
                            </li>
                        </ul>
                        <div class="d-flexs gap-5">
                            <div className="">
                                <div
                                    className="dars mb-4 mt-4"
                                    onClick={() => setdark(!dark)}
                                >
                                    {dark ? (
                                        <img src={darkmode} className="darkt" />
                                    ) : (
                                        <img
                                            src={lightmode}
                                            className="darkt"
                                        />
                                    )}
                                </div>
                                <span className="mt-5">
                                    {dark ? (
                                        <p>Dark Mode</p>
                                    ) : (
                                        <p>Light Mode</p>
                                    )}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NavbarMobile;

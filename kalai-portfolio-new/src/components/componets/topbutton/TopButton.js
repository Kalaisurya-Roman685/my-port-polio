import React, { useEffect, useState } from "react";

import ScrollToTop from "react-scroll-to-top";
import "./styles/TopButton.scss";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function TopButton(props) {
    const [backbutton, SetBackButton] = useState(false);
    const notify = () => toast("Top Moved...!!");
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 15300) {
                SetBackButton(true);
            } else {
                SetBackButton(false);
            }
        });
    }, []);
    const scrollup = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
            cursor: "pointor",
        });
    };
    return (
        <>

            <div className="mobile">
                <ScrollToTop
                    smooth
                    component={
                        <p style={{ color: "#24273F", fontSize: "1.5rem" }}>
                            <i class="fa-solid fa-arrow-up"></i>
                        </p>
                    }
                />
            </div>
        </>
    );
}

export default TopButton;

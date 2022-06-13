import React from "react";



import Section1 from "./componets/section1/Section1";
import About from "./componets/section2/About";
import Educations from "./componets/section3/Educations";
import WorkExperience from "./componets/section4/WorkExperience";
import Skills from "./componets/section5/Skills";
import Projectjs from "./componets/section6/Projectjs";
import Contactus from "./componets/section7/Contactus";
import Activities from "./componets/section8/Activities";
import Footer from "./componets/section9/Footer";

import TopButton from "./componets/topbutton/TopButton";
import "./Layoutsection.scss";
function Layoutssectios({ dark, setdark, color }) {
    return (
        <div
            style={{
                height: "100%",
                width: "100%",
            }}
        >
            <Section1 color={color} dark={dark} setdark={setdark} />
            <About />
            <Educations />

            <TopButton />
            <WorkExperience />
            <Skills />
            <Projectjs />
            <Contactus />
            <Activities />
            <Footer />
        </div>
    );
}

export default Layoutssectios;

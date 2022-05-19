import React from "react";
import Navbar from "../navbar/Navbar";
import './styles/Home.scss';
function Homepage({dark,setdark}) {
  return <div className="mains">
      <div className="inside-divs">
      <div className="navbar-height">
          <Navbar dark={dark} setdark={setdark}/>
      </div>
      <div className="content-section">
      <h1>home</h1>
      <h1>home</h1>
      <h1>home</h1>
      <h1>home</h1>
      <h1>home</h1>
      <h1>home</h1>
      <h1>home</h1>
      <h1>home</h1>
      <h1>home</h1>
      <h1>home</h1>
      <h1>home</h1>
      <h1>home</h1>
      <h1>home</h1>
      <h1>home</h1>
      <h1>home</h1>
      <h1>home</h1>
      <h1>home</h1>
      <h1>home</h1>
      </div>
      </div>
  </div>;
}

export default Homepage;

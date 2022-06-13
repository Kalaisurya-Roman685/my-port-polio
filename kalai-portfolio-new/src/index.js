import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";

// import axios from "axios";

import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap/dist/css/bootstrap.min.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// axios.defaults.baseURL = "http://122.165.104.197:15000/";

// axios.defaults.withCredentials = true;
// if (localStorage.hasOwnProperty("eco_token")) {
//     axios.defaults.headers.common["Authorization"] =
//         "Token " + localStorage.getItem("eco_token");
// } else {
//     console.log("no token");
// }

// if (!localStorage.hasOwnProperty("is_dark")) {
//     localStorage.setItem("is_dark", false);
// }

// if (!localStorage.hasOwnProperty("isloggedin")) {
//     localStorage.setItem("isloggedin", false);
// }

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);

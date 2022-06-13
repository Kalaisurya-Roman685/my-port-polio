import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./App.scss";
import { CirclePicker } from "react-color";
import Tippy from "@tippyjs/react";

import Layoutssectios from "./components/Layoutssectios";
import settings from "./assets/kalai-port/settings.png";


function App() {
    const [colors, SetColors] = useState([]);
    const setthemmes = () => {
        return JSON.parse(localStorage.getItem("themes"));
    };
    const [dark, SetDark] = useState(setthemmes());
    useEffect(() => {
        localStorage.setItem("themes", JSON.stringify(dark));
    }, [dark]);

    return (
        <div className={dark ? "theme--dark" : "theme--light"}>
            <div className="box-app d-none d-lg-block">
                <Tippy
                    interactive={true}
                    content={
                        <CirclePicker
                            color={colors}
                            onChangeComplete={(color) => SetColors(color.hex)}
                        />
                    }
                >
                    <div className="imag-box">
                        <img src={settings} className="settings" />
                    </div>
                </Tippy>
            </div>
            <div className="box-app d-block d-lg-none">
                <Tippy
                    interactive={true}
                    content={
                        <CirclePicker
                            color={colors}
                            onChangeComplete={(color) => SetColors(color.hex)}
                        />
                    }
                >
                    <div className="imag-box">
                        <img src={settings} className="settings" />
                    </div>
                </Tippy>
            </div>
            <div className="port-polio">


                <Router>
                    <Switch>

                        <Layoutssectios
                            dark={dark}
                            setdark={SetDark}
                            color={colors}
                        />
                    </Switch>
                </Router>
            </div>
        </div>
    );
}

export default App;

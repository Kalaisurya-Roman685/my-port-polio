import "./App.scss";
import React,{useState,useEffect} from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Homepage from "./components/homepage/Homepage";
import About from "./components/Aboutpage/About";
import Navbar from "./components/navbar/Navbar";

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
        {/* <Navbar dark={dark} setdark={SetDark}/> */}
     <div className="port-polio">
     <Router>
        <Switch>
          <Route exact path="/" render={()=><Homepage dark={dark} setdark={SetDark}/>} />
          <Route path="/about" component={About} />
        </Switch>
      </Router>
     </div>
    </div>
  );
}

export default App;

// import "./App.scss";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import Home from "./components/Homepage/Home";
// import CartHomepage from "./components/carthomepage/CartHomepage";
// import Cart from "./components/cart/Cart";
// import Address from "./components/addresspage/Address";

// import Login from "./components/login/Login";
// import Signup from "./components/signups/Signup";
// import ForgetPassword from "./components/forgetpassword/ForgetPassword";
// import ResetPassword from "./components/resetpassword/ResetPassword";
// import Navbar from "./components/navbar/Navbar";
// import AddressPageList from "./components/addresspage/AddressPageList";
// import { useState } from "react";

// function App() {
//     const [cartitems, setCartItems] = useState([]);

//     const handleclickadd = (product) => {
//         // alert("wwe");
//         console.log(product, "tr");
//         const ProductExits = cartitems.find((items) => items.id === product.id);
//         console.log("received is from ", ProductExits);
//         if (ProductExits) {
//             setCartItems(
//                 cartitems.map((itemsdata) =>
//                     itemsdata.id === product.id
//                         ? {
//                               ...ProductExits,
//                               quantity: ProductExits.quantity + 1,
//                           }
//                         : itemsdata
//                 )
//             );
//         } else {
//             setCartItems([...cartitems, { ...product, quantity: 1 }]);
//         }
//     };
//     const handleClickAddItems = () => {};
//     const handleClickRemove = (product) => {
//         const ProductExits = cartitems.find((items) => items.id === product.id);
//         if (ProductExits.quantity === 1) {
//             setCartItems(cartitems.filter((item) => item.id !== product.id));
//         } else {
//             setCartItems(
//                 cartitems.map((item) =>
//                     item.id === product.id
//                         ? {
//                               ...ProductExits,
//                               quantity: ProductExits.quantity - 1,
//                           }
//                         : item
//                 )
//             );
//         }
//     };
//     return (
//         <div className="App">
//             <Router>
//                 <Switch>
//                     <Route exact path="/" component={Home} />
//                     <Route path="/carthome/:name" component={CartHomepage}>
//                         <CartHomepage handleclickadd={handleclickadd} />
//                     </Route>
//                     <Route path="/cart-provide" component={Cart}>
//                         <Cart
//                             cartitems={cartitems}
//                             handleClickAddItems={handleclickadd}
//                             handleClickRemove={handleClickRemove}
//                         />
//                     </Route>
//                     <Route path="/address" component={Address} />
//                     <Route path="/login" component={Login} />
//                     <Route path="/signup" component={Signup} />
//                     <Route path="/forgetpassword" component={ForgetPassword} />
//                     <Route path="/resetpassword" component={ResetPassword} />
//                     <Route path="/addresslist" component={AddressPageList} />
//                 </Switch>
//             </Router>
//         </div>
//     );
// }

// export default App;

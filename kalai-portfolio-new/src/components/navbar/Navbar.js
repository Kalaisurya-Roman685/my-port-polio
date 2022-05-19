import React,{useState} from 'react'
import './styles/Navbar.scss'
function Navbar({dark,setdark}) {
    const [slots, SetSlots] = useState(false);

    const chageColorBack = () => {
        if (window.scrollY >=10) {
            SetSlots(true);
        } else {
            SetSlots(false);
        }
    };
    window.addEventListener("scroll", chageColorBack);
  return (
    <div className='mb-5'>
    <div className={slots ? "navbars-newslist active" : "navbars-newslist"}>
      
      <div className="lists ">
                <div className="kalai">kalaisurya</div>
                <div className="insides">
                    <span>Home</span>
                    <span>Abouts</span>
                    <span>Projects</span>
                    <span>Chat</span>
                    <span>Clients</span>
                </div>
                <div>
                  <button onClick={()=>setdark(!dark)}>Dark</button>
                </div>
            </div>
    </div>
    </div>
  )
}

export default Navbar;

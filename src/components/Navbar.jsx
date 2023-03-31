import React, {useState} from 'react';
import Logo from "../images/logo.png";

const Navbar = () => {

    const [nav, setNav] = useState(false);

    const changeBackground = () => {
        if (window.scrollY >= 50){
            setNav(true)
        }
        else{
            setNav(false)
        }
    }

    window.addEventListener("scroll", changeBackground)


    return (
        <nav className={nav ? "nav active" : "nav"}>
            <a href="#main" className="logo">
                <img src={Logo} alt="logo"/>
            </a>

            <input className="menu-btn" type="checkbox" id="menu-btn"/>
            <label htmlFor="menu-btn" className="menu-icon">
                <span className="nav-icon"></span>
            </label>

            <ul className="menu">
                <li> <a href="#main"> Kezdőlap </a> </li>
                <li> <a href="#features"> Jellemzők </a> </li>
                <li> <a href="#offer"> Ajánlatok </a> </li>
                <li> <a href="#about"> Rólunk </a> </li>
                <li> <a href="#contact"> Elérhetőség </a> </li>
            </ul>
        </nav>
    );
};

export default Navbar;
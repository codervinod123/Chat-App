import React from 'react'
import {Link} from "react-router-dom"
import LOGO from "../Asset/rocketlogo.png";
import "./Home.css";

const Navbar = () => {
  return (
    
        <div className="navbar">
                    <div className="logo_container">
                        <Link to="/">
                           <img src={LOGO} alt="" />
                        </Link>
                        <span>rocket.chat</span>
                    </div>
                    <div className="nav_menu">
                        
                        <Link to="/about">About Us</Link>
                        <Link to="/login">Login</Link>
                        <Link to="/register">Register</Link>
                    </div>
        </div>

  )
}

export default Navbar
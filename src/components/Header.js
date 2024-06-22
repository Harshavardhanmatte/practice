import { useState } from "react";
import { LOGO_URL } from "../utils/Constants";
import { Link } from "react-router-dom";
const Header =() => {
    const [btnNameReact,setBtnNameReact]=useState("Login");
    return(
        <div className="header">
            <div className="logo-container">
                <img
                className="logo"
                src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/"> Home </Link></li>
                    <li><Link to="/AboutUs"> About Us </Link></li>
                    <li><Link to="/contactUs"> Contact us </Link></li>
                   
                    
                    
                    <li>Cart</li>
                    <button className="login"
                    onClick={()=>{
                        btnNameReact == "Login"
                        ?setBtnNameReact("Logout")
                        :setBtnNameReact("Login");
                    }}
                    
                    >{btnNameReact}</button>
                </ul>

            </div>

        </div> 

    );
};
export default Header;
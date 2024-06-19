import { useState } from "react";
import { LOGO_URL } from "../utils/Constants";
const Header =() => {
    const [btnNameReact,setBtnNameReact]=useState("Login");
    return(
        <div className="header">
            <div className="logo-container">
                <img
                className="logo"
                src="https://cdn.dribbble.com/users/5246351/screenshots/13929150/yummy_food.jpg"/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact us</li>
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
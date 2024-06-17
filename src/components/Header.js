import { LOGO_URL } from "../utils/Constants";
const Header =() => {
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
                </ul>

            </div>

        </div> 

    );
};
export default Header;
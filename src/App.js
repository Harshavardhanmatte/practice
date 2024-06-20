import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter ,RouterProvider} from "react-router-dom";
import About from "./components/AboutUs";
import Contact from "./components/ContactUs";
import Error from "./components/Error";



const AppLayout = () => {
    return(
        <div>
            <Header/>
            <Body/> 

        </div>
    );
};
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<Error/>
    
    },
    {
        path:"/about",
        element:<About/>

    },
    {
        path:"/Contact",
        element:<Contact/>
    },
])

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/> );
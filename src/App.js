import React from "react";
import ReactDOM from "react-dom/client";
import Body from "./components/Body";
import Header from "./components/Header";
import { createBrowserRouter ,RouterProvider,Outlet} from "react-router-dom";
import About from "./components/AboutUs";
import Contact from "./components/ContactUs";
import Error from "./components/Error";
import ResturantsMenu from "./components/ResturantsMenu";



const AppLayout = () => {
    return(
        <div>
            <Header/>
            <Outlet/>

        </div> 
    );
};
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
               element:<Body/>,

            },
            {
                path:"/Body",
               element:<Body/>,

            },
            
            {
                path:"/AboutUs",
                element:<About/>,
        
            },
            {
                path:"/ContactUs",
                element:<Contact/>,
            },
            {
                path:"/resturants/:resId",
                element:<ResturantsMenu/>,
            },
        ],
        errorElement:<Error/>,
    }, 
]);

const root =ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/> );
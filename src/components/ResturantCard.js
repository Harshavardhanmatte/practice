import { CDN_URL } from "../utils/Constants";
import resList from "../utils/mockData";
import { useState } from "react";
const ResturantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId,name,cuisines,costForTwo,avgRating} =resData?.info;
    console.log(props);
    return(
        <div className="res-card">
            <img className="res-logo"  src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{cuisines.join(",")}</h4>
            <h4>{costForTwo}</h4>                                     
            <h4>{avgRating}</h4>

        </div>
    );
};
export default ResturantCard;
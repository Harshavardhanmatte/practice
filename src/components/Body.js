import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useState  } from "react";
import resList from "../utils/mockData";
const Body = () => {
    const [listOfResturants,setlistOfResturants] = useState(resList)
    return(
        <div className="body">
            <div className="filter">
                <button className="filter-btn"
                onClick={()=>{
                    const filteredList =listOfResturants.filter(
                        (res)=>res.info.avgRating >4
                    );
                    setlistOfResturants(filteredList);
                }
                }
                >Top Rated Resturants</button>
            </div>
            <div className="res-container">
                {
                    listOfResturants.map((resturant) =>(<ResturantCard  key={resturant.info.id}
                        resData={resturant}/>
                    )
                )    
                }
               
            </div>
        </div>
    );
};
export default Body;
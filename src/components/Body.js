import ResturantCard from "./ResturantCard";
import resList from "../utils/mockData";
import { useEffect, useState  } from "react";
import Shimmer from "./Shimmer";
const Body = () => {
    const [listOfResturants,setlistOfResturants] = useState([]);
    const [filteredResturant,setfilteredResturant]=useState([]);
    const [searchText , setsearchText]=useState("");

    useEffect(() => {
        fetchData();
    },[]);
    const fetchData = async () => {
        const data = await fetch(
            "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
   );
        const json = await data.json(",");
        const datas = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setlistOfResturants(datas);
        setfilteredResturant(datas)
    };
    
    return listOfResturants ==0 ? (<Shimmer/>):(
        <div className="body">
            <div className="filter">
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{
                        setsearchText(e.target.value);

                    }} />
                    <button onClick={()=>{
                        const filteredResturant =listOfResturants.filter(
                            (res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setfilteredResturant(filteredResturant);


                    }}>Search</button>


                </div>
                <button className="filter-btn"
                onClick={()=>{
                    const filteredResturant =listOfResturants.filter(
                        (res)=>res.info.avgRating >4
                    );
                    setfilteredResturant(filteredResturant);
                
                }
                }
                >Top Rated Resturants</button>
            </div>
            <div className="res-container">
                {filteredResturant.map((resturant) =>(<ResturantCard  key={resturant.info.id}
                        resData={resturant}/>
                    )
                )    
                }
               
            </div>
        </div>
    );
};
export default Body;
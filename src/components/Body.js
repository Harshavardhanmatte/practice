import ResturantCard from "./ResturantCard";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfResturants, setlistOfResturants] = useState([]);
  const [filteredResturant, setfilteredResturant] = useState([]);
  const [searchText, setsearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.37240&lng=78.43780&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json(",");
    const datas =
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setlistOfResturants(datas);
    setfilteredResturant(datas);
  };

  const  onlineStatus =useOnlineStatus();
  if(onlineStatus === false)return <h1>your offline !!.. Please check your internet Connection and try again</h1>

  return listOfResturants == 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            onClick={() => {
              const filteredResturant = listOfResturants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilteredResturant(filteredResturant);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredResturant = listOfResturants.filter(
              (res) => res.info.avgRating > 4
            );
            setfilteredResturant(filteredResturant);
          }}
        >
          Top Rated Resturants
        </button>
         
      </div>
      <div className="res-container">
        {Array.isArray(filteredResturant) &&
          filteredResturant.length > 0 &&
          filteredResturant.map((resturant) => (
            <Link
              key={resturant.info.id}
              to={"/resturants/" + resturant.info.id}
            >
              <ResturantCard resData={resturant} />
            </Link>
          ))}
         
      </div>
    </div>
  );
};
export default Body;

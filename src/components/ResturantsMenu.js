import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { MENU_URL } from "../utils/Constants";

const ResturantsMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  const { resId } = useParams();
  console.log(resId);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_URL + resId);
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;

  const itemCards =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
      ?.itemCards;
  console.log(itemCards);

  return (
    <div className="menu">
      <h1>{resInfo?.cards[2]?.card?.card?.info?.name}</h1>
      <p>
        {resInfo?.cards[2]?.card?.card?.info?.cuisines.join(",")} -{" "}
        {resInfo?.cards[2]?.card?.card?.info?.costForTwoMessage}
      </p>

       <ul>
        {itemCards.map((item) => (
          <li key={item?.card?.info?.id}>
            {item?.card?.info?.name} ---{"Rs."}
            {item?.card?.info?.price / 100 ||
              item?.card?.info?.defaultPrice / 100}
          </li>
        ))}
        <li>{itemCards[0]?.card?.info?.name}</li>
        <li>{itemCards[1]?.card?.info?.name}</li>
        <li>{itemCards[2]?.card?.info?.name}</li>
        <li>{itemCards[3]?.card?.info?.name}</li> 
       </ul> 
     </div>
  );
};

// const ResturantsMenu = () => {
// //   const { resId } = useParams();
// //   const menu = useMenu(resId);
//   //const card = menu?.cards[2]?.card?.card?.info;
//   //console.log(menu.cards[2]);
// //   const data =
//     menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card
//     //   ?.itemCards;
//   return (
//     <div>
//       {/* <h1>RESTURANT</h1>
//       <h1>{card.name}</h1>
//       <h3>{card.cuisines.join(",")}</h3>
//       <h3>{card.costForTwoMessage}</h3> */}

//       <ul>
//         {data.map((item) => (
//           <li>
//             {item.card.info.name}-----------{"Rs."}
//             {item.card.info.price / 100 || item.card.info.defaultPrice / 100}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };
export default ResturantsMenu;

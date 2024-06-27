import { useEffect, useState } from "react";

const UserCard = ({name}) => {
  const [count3] = useState(2);
  const [Count1] = useState(1);

  useEffect(()=>{

  },[]);
  return (
    <div className="user-card">
      <h1>Count : {count3}</h1>
      <h1>Count2 : {Count1}</h1>
      <h2>Name: {name}</h2>
      <h3>Location: Dehradun</h3>
      <h4>Contact: @akshaymarch7</h4>
    </div>
  );
};


export default UserCard;
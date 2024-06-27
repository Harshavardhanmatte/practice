import React from "react";
import UserCard from "./UserCard";
import UserClass from "./UserClass";

class About extends React.Component {
    constructor(props){
        super(props);

    }
    componentDidMount(){
        console.log("componet di mount");
    }
  render() {
    return (
      <div>
        <h1> About</h1>
        <h2>This is my about us page</h2>

        <UserClass name={"Harshavardhan"} location={"kanigiri"} />
          
      </div>
    );
  }
}

export default About;

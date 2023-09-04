import React from "react";
import Avatar from "./Avatar";

function Card(props) {
  return (
    <div className="card">
      <div className="top-class">
        <h1>{props.name}</h1>
        <Avatar img={props.imgURL} />
      </div>
      <div className="bottom-class">
        <h1>{props.email}</h1>
        <h1>{props.phn}</h1>
      </div>
    </div>
  );
}

export default Card;

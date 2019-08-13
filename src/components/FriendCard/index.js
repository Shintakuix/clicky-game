import React from "react";
import "./style.css";

function FriendCard(props) {
  return (
 // <div className="container">
  <span onClick={() => props.clicks(props.id)}>
    <div className="card">
      <div className="img-container">
        <img id={props.id} src={props.image} />
      </div>
      </div>
  </span> 
 //</div>
    
  );
}

export default FriendCard;

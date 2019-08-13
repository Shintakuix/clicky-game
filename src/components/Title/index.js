import React from "react";
import "./style.css";

const Title = props => (
  
<div className="title">{props.children} 
<div className="scores">
Score: {props.score}
</div>
<div className="highscores">
highest Score: {props.highestscore}
</div>
</div>
   
)

export default Title;

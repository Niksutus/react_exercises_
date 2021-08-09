import React from "react";
import "./Box.css";


function Box(props) {
    return (
      <div className="box">
        <h3>{props.name}</h3>
        <p>{props.title}</p>
        <p>{props.age}</p>
      </div>
    )
  }

export default Box;
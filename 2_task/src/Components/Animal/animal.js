import React from "react";
import "./Animal.css";

const greetingText = () => {
  alert("Hello, I am animal, Nice to meet you");
};

const Animal = (props) => {
  return (
    <div className="animalCard">
      <h1>{props.name}</h1>
      <img alt={props.name} src={props.img} />
      <button onClick={() => greetingText(props.name)}>CLick me!</button>
    </div>
  );
};

export default Animal;

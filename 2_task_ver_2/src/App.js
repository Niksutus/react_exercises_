import React, { Component } from "react";
import Animal from "./Components/Animal/Animal";
import "./App.css";

class App extends Component {
  state = {
    animals: [
      {
        name: "Fox",
        img:
          "https://images.unsplash.com/photo-1474511320723-9a56873867b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2552&q=80",
      },
      {
        name: "Sheep",
        img:
          "https://images.unsplash.com/photo-1544862478-ea74fae6fb22?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
      },
      {
        name: "Parrot",
        img:
          "https://images.unsplash.com/photo-1504579264001-833438f93df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80",
      },
    ],
  };

  render() {
    const animalList = this.state.animals.map((something) => {
      return (
        <Animal
          key={something.name}
          name={something.name}
          img={something.img}
        />
      );
    });
    return <div className="cards">{animalList}</div>;
  }
}

export default App;

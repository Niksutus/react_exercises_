import React from "react";
import Animal from "./Components/Animal/animal";
import "./App.css";

class App extends Component {
  state = {
    animals: [
      {
        name: "Fox",
        img:
          "https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80",
      },
    ],
  };
  render() {
    return (
      <div className="cards">
        <Animal
          name="Fox"
          img="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80"
        />
        <Animal
          name="Rabbit"
          img="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80"
        />
        <Animal
          name="Wolf"
          img="https://images.unsplash.com/photo-1557050543-4d5f4e07ef46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1778&q=80"
        />
      </div>
    );
  }
}
export default App;

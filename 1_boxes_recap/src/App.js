import React, { Component } from 'react';
import logo from "./logo.svg";
import "./App.css";
import Box from "./components/Box/Box";


class App extends Component {
  state = {
    people: [
      { name: "Margit", title: "Teacher", age: 25 },
      { name: "Matti", title: "Mattinen", age: 25 },
    ],
  };

  // function Box(props) {
  //   return (
  //     <div className="box">
  //       <h3>{props.name}</h3>
  //       <p>{props.title}</p>
  //       <p>{props.title}</p>
  //     </div>
  //   )
  // }

  render() {
    const peopleList = this.state.people.map((something) => {
      return (
        <Box
          name={something.name}
          title={something.title}
          age={something.age}
        />
      );
    });
    return <div className="cards">{peopleList}</div>;
  }
}

export default App;

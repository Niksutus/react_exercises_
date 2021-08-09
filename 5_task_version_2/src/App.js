import React, { Component } from 'react';
import Circle from './Components/Circle/Circle'
import GameOver from './Components/GameOver/GameOver'

const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max-min +1)) + min;
}

class App extends Component {
  state = {
    score: 0,
    current: 0,
    showGameOver: false,
    circles: [
      {id: 1, color:"green"},
      {id: 2, color:"blue"},
      {id: 3, color:"red"},
      {id: 4, color:"yellow"},
    ]
  }

  pace = 1500;
  timer = undefined;

  clickHandler = (id) => {
    console.log("wow you clicked circle number" + id);

    if(this.state.current !== id){
      this.stopHandler();
      return;
    }

    this.setState({
      score: this.state.score + 1,
    });
  };

  nextCircle = () => {
    let nextActive = undefined;
    do{
      nextActive = getRndInteger(1, 4);
    } while (nextActive === this.state.current);

    this.setState({
      current: nextActive,
    })

    this.pace *= 0.95;
    this.timer = setTimeout(this.nextCircle, this.pace)

    console.log("Active circle is:", this.state.current);
  }

  startHandler = () => {
    this.nextCircle(); 
  }
  stopHandler = () => {
    clearTimeout(this.timer)

    this.setState({showGameOver: true})
  }
   
  render() {
  const circles = this.state.circles.map(item => {
    return <Circle key={item.id} color={item.color} click={() => this.clickHandler(item.id)} active={this.state.current === item.id}/>
  })
    return (
      <div>
        <div>{circles}</div>
        <p>Your score is: {this.state.score}</p>
        <button onClick={this.startHandler}>Start</button>
        <button onClick={this.stopHandler}>Stop</button>
        {this.state.showGameOver && <GameOver score={this.state.score} />}
      </div>
    );
  }
}

export default App;
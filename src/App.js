// import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react'

class App extends Component {

  constructor(){
    super()
    this.state={
      counter : 0
    }
  }

  increment=()=>{
    this.setState({counter: this.state.counter+1})
  }

  decrement=()=>{
    this.setState({counter: this.state.counter - 1})
  }

  reset=()=>{
    this.setState({counter: 0})
  }
  
  
  render() {
    return (
      <div style={{textAlign: 'center'}}>
        <h1>counter</h1>
        <h3>{this.state.counter}</h3>
        <button onClick={this.increment}>+</button>
        <button onClick={this.decrement}>-</button>
        <button onClick={this.reset}>reset</button>
      </div>
    )
  }
}


export default App;

import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';
import calculate from '../logic/calculate'

class App extends React.Component {
  state = {
    // result: 0,
    total: 0,
    next: '',
    operation: null
  }

  handleClick = (button) => {
    console.log(this.state.total);
    let data = calculate(this.state, button)
    this.setState({
      // next: (this.state.next + button),
      total: data.total,
      next: data.next,
      operation: data.operation
      // next: calculate(this.state, button).next
    })
    console.log(this.state.total);
  }

  render() {
    return (
      <div className="calculator">
        <h1>React Calculator</h1>
        <Display result={this.state.next ? this.state.next : this.state.total}/>
        <ButtonPanel onClick={this.handleClick}/>
      </div>
    );
  }
}

export default App;

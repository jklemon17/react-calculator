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
    this.setState({
      next: (this.state.next + button),
    })
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

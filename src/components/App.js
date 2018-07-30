import React, { Component } from 'react';
import Display from './Display';
import ButtonPanel from './ButtonPanel';
import './App.css';
import calculate from '../logic/calculate'

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      result: '0',
      total: null,
      next: null,
      operation: null
    }
  }

  handleClick(button) {
    this.state.result=10000;
  }
  
  render() {
    return (
      <div className="calculator">
        <h1>React Calculator</h1>
        <Display result={this.state.result}/>
        <ButtonPanel onClick={button => this.handleClick(button)}/>
      </div>
    );
  }
}

export default App;

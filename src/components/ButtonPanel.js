import React, { Component } from 'react';
import Button from './Button';
import './ButtonPanel.css';

class ButtonPanel extends React.Component {
  constructor(props) {
    super(props);
    // this.buttonGroups = [['AC', '+/-', '%', '/'],
    //                       ['7', '8', '9', 'X'],
    //                       ['4', '5', '6', '-'],
    //                       ['1', '2', '3', '+'],
    //                       ['0', '.', '=']];
    this.buttonGroup1 = ['AC', '+/-', '%', '÷'];
    this.buttonGroup2 = ['7', '8', '9', 'X'];
    this.buttonGroup3 = ['4', '5', '6', '-'];
    this.buttonGroup4 = ['1', '2', '3', '+'];
    this.buttonGroup5 = ['0', '.', '='];
    this.orange = ['÷','X','-','+','='];
    this.wide = ['0'];
  }


  render() {
    return (
      <div className="button-panel">
        <div className="row">
          {this.buttonGroup1.map(button => <Button name={button} color={ this.orange.includes(button) ? 'orange' : 'gray'} wide={ this.wide.includes(button) ? true : false }/>)}
        </div>
        <div className="row">
          {this.buttonGroup2.map(button => <Button name={button} color={ this.orange.includes(button) ? 'orange' : 'gray'} wide={ this.wide.includes(button) ? true : false }/>)}
        </div>
        <div className="row">
          {this.buttonGroup3.map(button => <Button name={button} color={ this.orange.includes(button) ? 'orange' : 'gray'} wide={ this.wide.includes(button) ? true : false }/>)}
        </div>
        <div className="row">
          {this.buttonGroup4.map(button => <Button name={button} color={ this.orange.includes(button) ? 'orange' : 'gray'} wide={ this.wide.includes(button) ? true : false }/>)}
        </div>
        <div className="row">
          {this.buttonGroup5.map(button => <Button name={button} color={ this.orange.includes(button) ? 'orange' : 'gray'} wide={ this.wide.includes(button) ? true : false }/>)}
        </div>
      </div>
    );
  }
}

export default ButtonPanel;

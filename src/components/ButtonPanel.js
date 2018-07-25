import React, { Component } from 'react';
import Button from './Button';

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
  }

  render() {
    return (
      <div class="button-panel">
        <div class="row">
          {this.buttonGroup1.map(button => <Button name={button} />)}
        </div>
        <div class="row">
          {this.buttonGroup2.map(button => <Button name={button} />)}
        </div>
        <div class="row">
          {this.buttonGroup3.map(button => <Button name={button} />)}
        </div>
        <div class="row">
          {this.buttonGroup4.map(button => <Button name={button} />)}
        </div>
        <div class="row">
          {this.buttonGroup5.map(button => <Button name={button} />)}
        </div>
      </div>
    );
  }
}

export default ButtonPanel;

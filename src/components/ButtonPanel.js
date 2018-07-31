import React, { Component } from 'react';
import Button from './Button';
import './ButtonPanel.css';

class ButtonPanel extends React.Component {
  buttonGroup1 = ['AC', '+/-', '%', '÷'];
  buttonGroup2 = ['7', '8', '9', 'X'];
  buttonGroup3 = ['4', '5', '6', '-'];
  buttonGroup4 = ['1', '2', '3', '+'];
  buttonGroup5 = ['0', '.', '='];
  orange = ['÷','X','-','+','='];
  wide = ['0'];

  // handleClick = (button) => {
  //   this.props.onClick(button)
  // }

  render() {
    return (
      <div className="button-panel">
        <div className="row">
          {this.buttonGroup1.map(button => <Button key={button} name={button} color={ this.orange.includes(button) ? 'orange' : 'gray'} wide={ this.wide.includes(button) ? true : false } onClick={() => this.props.onClick(button)}/>)}
        </div>
        <div className="row">
          {this.buttonGroup2.map(button => <Button key={button} name={button} color={ this.orange.includes(button) ? 'orange' : 'gray'} wide={ this.wide.includes(button) ? true : false } onClick={() => this.props.onClick(button)}/>)}
        </div>
        <div className="row">
          {this.buttonGroup3.map(button => <Button key={button} name={button} color={ this.orange.includes(button) ? 'orange' : 'gray'} wide={ this.wide.includes(button) ? true : false } onClick={() => this.props.onClick(button)}/>)}
        </div>
        <div className="row">
          {this.buttonGroup4.map(button => <Button key={button} name={button} color={ this.orange.includes(button) ? 'orange' : 'gray'} wide={ this.wide.includes(button) ? true : false } onClick={() => this.props.onClick(button)}/>)}
        </div>
        <div className="row">
          {this.buttonGroup5.map(button => <Button key={button} name={button} color={ this.orange.includes(button) ? 'orange' : 'gray'} wide={ this.wide.includes(button) ? true : false } onClick={() => this.props.onClick(button)}/>)}
        </div>
      </div>
    );
  }
}

export default ButtonPanel;

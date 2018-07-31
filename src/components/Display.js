import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Display.css';

class Display extends React.Component {
  static defaultProps = {
    result: 0,
  };
  static propTypes = {
    result: PropTypes.number,
  };

  render() {
    return (
      <div className="display">
        <p>{this.props.result}</p>
      </div>
    )
  }
}

export default Display;

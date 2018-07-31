import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    color: PropTypes.string.isRequired,
    wide: PropTypes.bool.isRequired
  }
  render() {
    let buttonClass = 'button ';
    if (this.props.wide) {
      buttonClass += 'wide ';
    } else if (this.props.color == 'orange') {
      buttonClass += 'orange ';
    } else {
      buttonClass += 'gray ';
    }

    return (
      <button
        className={buttonClass}
        onClick={this.props.onClick}
      >
        {this.props.name}
      </button>
    )
  }
}

export default Button;

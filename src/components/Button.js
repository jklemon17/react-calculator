import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.propTypes = {
      name: PropTypes.string.isRequired
    }
  }
  render() {
    return (
      <button>{this.props.name}</button>
    )
  }
}

export default Button;

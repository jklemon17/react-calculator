import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Display.css';

class Display extends React.Component {
  constructor(props) {
    super(props);
    this.defaultProps = { //This doesn't seem to be working
      result: "0",
    };
    this.propTypes = {
      result: PropTypes.string.isRequired,
    };
  }

  render() {
    return (
      <div className="display">
        <p>{this.props.result}</p>
      </div>
    )
  }
}

export default Display;

import React, { Component } from 'react';

import LineCreation from '../Components/LineCreation'

class ScriptContainer extends Component {

  render() {
    return (
      <div id='scriptCreation'>
        <h4>1. Write your script:</h4>
        <LineCreation createScript={this.props.createScript} />
      </div>
    )
  }
}

export default ScriptContainer;

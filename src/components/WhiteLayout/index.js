// Dependencies
import React, { Component } from 'react';


export default class WhiteLayout extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <div>
          {this.props.children}
        </div>
      </div>
    )
  }
}
// Dependencies
import React, { Component } from 'react';
// Externals
import Footer from '../BaseLayout/components/Footer';
import './index.css';

const classNames = [
  "first-header",	
  "second-header",
  "third-header"
];

/* istanbul ignore next */
export default class WhiteLayout extends Component {
  constructor(props) {
	  /* istanbul ignore next */
    super(props);
    this.state = {
      index: 0,
    };
  }
/* istanbul ignore next */
  incrementIndex = () => {
    const newIndex = this.state.index + 1;
    this.setState({ index: newIndex })
  }
/* istanbul ignore next */
  componentDidMount = () => {
    setInterval(this.incrementIndex, 3000);
  }
/* istanbul ignore next */
  render() {
    const index = this.state.index % classNames.length;
    const className = classNames[index];
    return(
      <div>
        <div className={className}>
        </div>
        <div className="content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    )
  }
}
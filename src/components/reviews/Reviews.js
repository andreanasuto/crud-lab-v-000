import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    return (
      <ul>
        <ReviewInput store={this.props.store} />
        Reviews
      </ul>
    );
  }
};

export default Reviews;

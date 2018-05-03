import React, { Component } from 'react';
import Review from './ReviewInput';

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

import React, { Component } from 'react';

class Review extends Component {
  constructor () {
    super()

    handleClick = () => {
      
    }
  }
  render() {
    return (
      <li>
        {this.props.review.text}
      </li>
    );
  }
};

export default Review;

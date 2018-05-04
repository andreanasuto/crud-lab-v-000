import React, { Component } from 'react';

class Review extends Component {
  constructor () {
    super()

    handleClick = () => {
      this.props.store.dispatch({
        action: 'DELETE_REVIEW',
        id: this.props.review.id
      })
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

import React, { Component } from 'react';

class Review extends Component {
  constructor () {
    super()
    
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick = () => {
    this.props.store.dispatch({
      action: 'DELETE_REVIEW',
      id: this.props.review.id
    })
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

import React, { Component } from 'react';
import ReviewInput from './ReviewInput';

class Reviews extends Component {
  render() {
    const reviews = this.props.getState().restaurants.filter(function(el){
      return el.id = this.props.restaurantId
    })
    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;

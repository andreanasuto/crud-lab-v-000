import React, { Component } from 'react';
import ReviewInput from './ReviewInput';

class Reviews extends Component {
  store = {this.props}
  render() {
    const filteredReviews = store.getState().restaurants.filter(function(el){
       el.id = this.props.restaurantId
    })

    const reviews = filteredReviews.map(function(el){
      return <Review review={el}/>
    })

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;

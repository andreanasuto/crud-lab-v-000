import React, { Component } from 'react';
import ReviewInput from './ReviewInput';

class Reviews extends Component {
  render() {
    const {store, restaurantId} = this.props
    const filteredReviews = store.getState().reviews.filter(el =>
      return el.id === restaurantId)

    const reviews = filteredReviews.map(function(el){
      return <Review store={store} review={el}/>
    })

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;

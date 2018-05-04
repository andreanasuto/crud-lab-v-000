import React, { Component } from 'react';
import Review from './Review';

class Reviews extends Component {
  render() {
    const {store, restaurantId} = this.props
    const filteredReviews = store.getState().reviews.filter(el =>
       el.id === restaurantId)

    const reviews = filteredReviews.map(el =>
      <Review store={store} review={el}/>
    )

    return (
      <ul>
        {reviews}
      </ul>
    );
  }
};

export default Reviews;

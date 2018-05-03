import React, { Component } from 'react';
import Restaurant from './restaurant'


class Restaurants extends Component {
  render() {

    const restaurants = this.props.store.getState().restaurants.map(function(restaurant){
      return <Restaurant restaurant={restaurant} />
    })

    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;

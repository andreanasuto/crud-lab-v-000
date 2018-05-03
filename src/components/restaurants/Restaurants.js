import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {

    // const restaurants = this.props.store.getState().map(function(restaurant){
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

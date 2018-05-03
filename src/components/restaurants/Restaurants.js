import React, { Component } from 'react';

const restaurants = this.props.restaurants.map(function(restaurant){
  return restaurant.text
})

class Restaurants extends Component {
  render() {
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;

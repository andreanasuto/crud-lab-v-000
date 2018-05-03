import React, { Component } from 'react';


class Restaurants extends Component {
  render() {
    const restaurants = this.props.restaurants.map(function(restaurant){
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

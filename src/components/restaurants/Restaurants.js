import React, { Component } from 'react';


class Restaurants extends Component {
  const restaurants = this.props.restaurants.map(function(restaurant){
    return <Restaurant restaurant={restaurant} />
  })
  
  render() {
    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;

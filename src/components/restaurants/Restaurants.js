import React, { Component } from 'react';
import Restaurant from './Restaurant'

class Restaurants extends Component {
  render() {

    const restaurants = this.props.getState().restaurants.map(function(restaurant){
      return <Restaurant restaurant={restaurant} store={this.props} />
     })

    return(
      <ul>
        {restaurants}
      </ul>
    );
  }
};

export default Restaurants;

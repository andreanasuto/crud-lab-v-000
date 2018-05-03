import React, { Component } from 'react';

class RestaurantInput extends Component {
  render() {
    return (
      <div>
          <input type="text">Your restaurant</input>
          <input type="submit">Submit</input>
      </div>
    );
  }
};

export default RestaurantInput;

import React, { Component } from 'react';

class Restaurant extends Component {
  render() {
    return (
      <div>
        {this.props.restaurant.text}
      </div>
    );
  }
};

export default Restaurant;

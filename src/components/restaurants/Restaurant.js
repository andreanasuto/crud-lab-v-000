import React, { Component } from 'react';

class Restaurant extends Component {
  handleClick = (event) => {
    
  }
  render() {
    return (
      <div>
        <li> {this.props.restaurant.text} </li>
        <button onClick={this.handleClick}>Delete me</button>
      </div>
    );
  }
};

export default Restaurant;

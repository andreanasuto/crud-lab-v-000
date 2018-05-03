import React, { Component } from 'react';

class Restaurant extends Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: event.target.id
    })
  }

  render() {
    return (
      <div>
        <li> {this.props.restaurant.text} </li>
        <button onClick={this.handleClick} id: {this.props.restaurant.id}>Delete me</button>
      </div>
    );
  }
};

export default Restaurant;

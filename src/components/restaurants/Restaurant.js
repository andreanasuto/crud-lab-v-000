import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {
  handleClick = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      restaurant: {
        id: event.target.id
      }
    })
  }

  render() {
    return (
      <div>
        <li> {this.props.restaurant.text} </li>
        <button onClick={this.handleClick} id={this.restaurant.id}>Delete me</button>
        <ReviewInput store={this.props.store}/>
      </div>
    );
  }
};

export default Restaurant;

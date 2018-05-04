import React, { Component } from 'react';
import ReviewInput from '../reviews/ReviewInput';

class Restaurant extends Component {
  constructor() {
    super()

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.props.store.dispatch({
      type: 'DELETE_RESTAURANT',
      id: this.props.restaurant.id
    })
  }

  render() {
    return (
      <div>
        <li> {this.props.restaurant.text} </li>
        <button onClick={this.handleClick} id={this.props.restaurant.id}>Delete me</button>
        <ReviewInput store={this.props.store}/>
      </div>
    );
  }
};

export default Restaurant;

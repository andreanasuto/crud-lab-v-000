import React, { Component } from 'react';
import Review from './ReviewInput';

class ReviewInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value,
      restaurantId:
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      review: {
        text: event.target.value,
        id: event.target.id
      }
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.state.text} id={this.state.id} onChange={this.handleChange}/>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;

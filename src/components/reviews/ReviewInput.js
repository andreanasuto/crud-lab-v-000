import React, { Component } from 'react';

class ReviewInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.props.store.dispatch({
      type: 'ADD_REVIEW',
      reviews: {
        text: event.target.value,
        id: event.target.id
      }
      })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type='text' value={this.props.text} id={this.props.restaurant.id} onChange={this.handleChange}/>
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default ReviewInput;

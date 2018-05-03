import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super()
    this.state = ({
      text: ''
    })

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_RESTAURANT',
      restaurant: {
        text: this.state.text,
      },
    });
    this.setState({
      text: '',
    });
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' value={this.props.text} onChange={this.handleChange} />
          <input type='submit' onSubmit={this.handleOnSubmit} />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

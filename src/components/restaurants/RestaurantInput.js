import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super()
    this.state = ({
      text: ''
    })
  }
  handleChange = (event) => {
    this.setState({
      text: event.target.value
    })
  }

  handleOnSubmit(event) {
    event.preventDefault();
    this.props.store.dispatch({
      type: 'ADD_BAND',
      band: {
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

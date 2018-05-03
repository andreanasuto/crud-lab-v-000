import React, { Component } from 'react';

class RestaurantInput extends Component {
  constructor() {
    super()
    this.state = {(
      text: ''
    )}
  }
  handleChange = (event) => {

  }

  render() {
    return (
      <div>
        <form>
          <input type='text' onChange={this.handleChange} />
          <input type='submit' />
        </form>
      </div>
    );
  }
};

export default RestaurantInput;

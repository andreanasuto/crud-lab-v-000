import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }
  render() {
    return (
      <div>
        <form>
          <input type='text' onChange={this.handleChange}/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;

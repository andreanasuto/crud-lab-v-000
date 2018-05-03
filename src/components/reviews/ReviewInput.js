import React, { Component } from 'react';
import Reviews from './Reviews';

class ReviewInput extends Component {
  constructor(){
    super()
    this.state = {
      text: ''
    }
  }

  handleChange = (event) => {
    event.preventDefault()
    this.setState({
      text: event.target.value
    })
  }

  render() {
    return (
      <div>
        <form>
          <input type='text' value={this.props.text} onChange={this.handleChange}/>
        </form>
      </div>
    );
  }
};

export default ReviewInput;

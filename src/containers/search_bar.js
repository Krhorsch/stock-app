import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      symbol: ''
    }

    this.onInputChange = this.onInputChange.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnSubmit(event) {
    event.preventDefault();

    this.setState({symbol: ''})
  }

  onInputChange(event) {
    this.setState({symbol: event.target.value})
  }

  render() {
    return (
      <form onSubmit={this.handleOnSubmit} className="input-group">
        <input
          className="form-control"
          value={this.state.symbol}
          onChange={this.onInputChange}/>
          <button type="submit" className="btn btn-secondary">Submit</button>
      </form>
    )
  }
}

export default SearchBar;

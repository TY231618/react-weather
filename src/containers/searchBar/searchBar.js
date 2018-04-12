import React from 'react';

export default class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
    
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(event) {
    this.setState({term: event.target.value});
  }

  // prevents form from submitting itself
  onFormSubmit(event) {
    event.preventDefault();

    this.props.fetchWeather(this.state.term);
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={ this.onFormSubmit } className="input-group">
        <input
          placeholder="Get a five day forcast for your favourite US cities"
          className="form-control center"
          value={ this.state.term }
          onChange={ this.onInputChange }
        />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">Submit</button>
        </span>
      </form>
    )
  }
}
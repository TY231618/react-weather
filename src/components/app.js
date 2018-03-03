import React, { Component } from 'react';
import SearchBar from '../containers/searchBar/search_bar_container';
import WeatherList from '../containers/weatherList/weatherList_container';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
      </div>
    );
  }
}

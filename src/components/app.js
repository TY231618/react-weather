import React, { Component } from 'react';
import SearchBar from '../containers/searchBar/search_bar_container';
import WeatherList from '../containers/weatherList/weatherList_container';
import RandomContent from '../containers/content/random_content_container';
import MovieReviewList from '../containers/movieReviewList/movieReviewList';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <WeatherList />
        <MovieReviewList />
      </div>
    );
  }
}

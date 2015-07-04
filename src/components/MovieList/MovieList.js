import React, { PropTypes } from 'react';

export default class MovieList {

  _renderMovies() {

    let movies = [];

    this.props.movies.map(movie => {
      movies.push(
        <div class="movie">
          <h4>{movie.title}</h4>
          <img src={movie.image} />
          <button>Play</button>
        </div>
      )
    });

    return movies;
  }

  render() {
    return (
      <div class="movie-list">
        {this._renderMovies()}
      </div>
    );
  }

}

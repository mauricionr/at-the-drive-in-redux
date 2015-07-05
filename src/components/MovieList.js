import React, { PropTypes } from 'react';
import { Navigation } from 'react-router';
import { Loader } from './index';

let MovieList = React.createClass({

  mixins: [ Navigation ],

  _playMovie(movie) {
    this.props.watchMovie(movie.magnet);
    this.transitionTo(`/screen`);
  },

  _renderMovies() {

    let movies = [];

    this.props.movies.map((movie, i) => {
      movies.push(
        <div className="movie" key={i}>
          <h4>{movie.title}</h4>
          <img src={movie.image} />
          <button onClick={() => this._playMovie(movie)}>Play</button>
        </div>
      )
    });

    return movies;
  },

  render() {
    return (
      <div className="movie-list">
        {this.props.movies.length ? this._renderMovies(): <Loader />}
      </div>
    );
  }

});

export default MovieList;

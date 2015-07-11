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

      let divStyle = {
        height: '345',
        width: '230',
        backgroundImage: 'url(' + movie.image + ')',
      }

      movies.push(
        <div className="movie">
          <div style={divStyle} onClick={() => this._playMovie(movie)} key={i}></div>
          <h4>{movie.title}</h4>
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

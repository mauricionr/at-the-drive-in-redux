import React, { PropTypes } from 'react';
import { Navigation } from 'react-router';

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
        <div className="movie clearfix" key={i}>
          <div style={divStyle} onClick={() => this._playMovie(movie)}></div>
          <p className="title">{movie.title}</p>
          <div className="row btm-row">
            <p className="col-xs-6 btm-title divider">{movie.rating}</p>
            <p className="col-xs-6 btm-title">{movie.genre}</p>
          </div>
        </div>
      )
    });

    return movies;
  },

  render() {
    return (
      <div className="movie-list">
        {this._renderMovies()}
      </div>
    );
  }

});

export default MovieList;

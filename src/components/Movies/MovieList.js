import React, { Component, PropTypes } from 'react';
import { Navigation } from 'react-router';
import { pushState } from 'redux-router';

export default class MovieList extends Component {

  constructor(props) {
    super(props);
  }

  _playMovie(movie) {

    console.log('wtf', this.props, this)

    this.props.watchMovie(movie.magnet);
    this.props.dispatch(
      pushState(null, '/screen')
    );
  }

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
  }

  render() {
    return (
      <div className="movie-list">
        {this._renderMovies()}
      </div>
    );
  }

}

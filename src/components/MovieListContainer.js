import React from 'react';
import { MovieList, Search } from './index';
import MoviesAPI from '../utils/API';
import prepareRoute from '../decorators/prepareRoute';
import * as MoviesActionCreators from '../actions/movies';
import { connect } from 'redux/react';
import {bindActionCreators} from 'redux';
import * as moviesActions from '../actions/movies';

@prepareRoute(async ({ redux, params: { } }) => {
  return await * [
    redux.dispatch(MoviesActionCreators.getMovies())
  ];
})
@connect(({ Movies }) => ({ Movies }))
export default class Root extends React.Component {

  render() {
    const {
      props: {
        Movies
      }
    } = this;

    const movies = Movies.get(`movies`).toJS();

    return (
      <div>
        <Search {...bindActionCreators(moviesActions, this.props.dispatch)}/>
        <MovieList movies={movies} {...bindActionCreators(moviesActions, this.props.dispatch)} />
      </div>
    )
  }

}

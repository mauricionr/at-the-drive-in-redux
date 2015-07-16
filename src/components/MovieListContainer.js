import React from 'react';
import { MovieList, Search, SearchNav } from './index';
import MoviesAPI from '../utils/API';
import prepareRoute from '../decorators/prepareRoute';
import * as MoviesActionCreators from '../actions/movies';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as moviesActions from '../actions/movies';

@prepareRoute(async ({ store, params: { } }) => {
  return await * [
    store.dispatch(MoviesActionCreators.getMovies({
      page: store.getState().Movies.toJS().page
    }))
  ];
})
@connect(({ Movies }) => ({ Movies }))
export default class Root {

  render() {
    const {
      props: {
        Movies
      }
    } = this;

    const movies = Movies.get(`movies`).toJS();

    return (
      <div>
        <Search {...bindActionCreators(moviesActions, this.props.dispatch)} />
        <SearchNav {...bindActionCreators(moviesActions, this.props.dispatch)} store={this.props.route.store} />
        <MovieList movies={movies} {...bindActionCreators(moviesActions, this.props.dispatch)} />
        <SearchNav {...bindActionCreators(moviesActions, this.props.dispatch)} store={this.props.route.store} />
      </div>
    )
  }

}

import React, {Component}from 'react';
import { MovieList, Search, SearchNav } from '../index';
import prepareRoute from '../../decorators/prepareRoute';
import * as MoviesActionCreators from '../../actions/movies';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as moviesActions from '../../actions/movies';
import { Loader } from '../index';

@prepareRoute(async ({ store, params: { } }) => {
  if(!store.getState().Movies.toJS().movies.length) {
      return await * [
        store.dispatch(MoviesActionCreators.getMovies({
          page: store.getState().Movies.toJS().page
        }))
      ];
  } else {
    return;
  }
})
@connect(({ Movies }) => ({ Movies }))
export default class Root extends Component {

  render() {
    const {
      props: {
        Movies
      }
    } = this;

    const movies = Movies.get(`movies`).toJS();
    const page = Movies.get(`page`);
    const filtering = Movies.get(`filtering`).toJS();
    var view;

    if(movies && movies.length > 0) {
      view = <div>
        <Search {...bindActionCreators(moviesActions, this.props.dispatch)} />
        <SearchNav {...bindActionCreators(moviesActions, this.props.dispatch)} page={page} filtering={filtering} />
        <MovieList movies={movies} {...bindActionCreators(moviesActions, this.props.dispatch)} dispatch={this.props.dispatch} />
        <SearchNav {...bindActionCreators(moviesActions, this.props.dispatch)} page={page} filtering={filtering} />
      </div>
    } else {
      view = <Loader />
    }

    return view;
  }

}

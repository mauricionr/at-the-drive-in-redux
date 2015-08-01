import React from 'react';
import { MovieList, Search, SearchNav } from '../index';
import MoviesAPI from '../../utils/API';
import prepareRoute from '../../decorators/prepareRoute';
import * as ShowsActionCreators from '../../actions/shows';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';

@prepareRoute(async ({ store, params: { } }) => {
  return await * [
    store.dispatch(ShowsActionCreators.getShows())
  ];
})
@connect(({ Shows }) => ({ Shows }))
export default class ShowsListContainer {

  render() {
    const {
      props: {
        Shows
      }
    } = this;

    const shows = Shows.get(`shows`).toJS();

    return (
      <div className="jumbotron">
      </div>
    )
  }

}

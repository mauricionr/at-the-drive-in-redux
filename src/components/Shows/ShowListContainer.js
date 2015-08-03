import React from 'react';
import { ShowsList } from '../index';
import prepareRoute from '../../decorators/prepareRoute';
import * as ShowsActionCreators from '../../actions/shows';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as showsActions from '../../actions/shows';
import { Loader } from '../index';

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
    var view;

    if(shows && shows.length > 0) {
      view = <ShowsList shows={shows} {...bindActionCreators(showsActions, this.props.dispatch)} />;
    } else {
      view = <Loader />;
    }

    return view;
  }

}

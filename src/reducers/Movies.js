import Immutable from 'immutable';
import ActionTypes from '../consts/ActionTypes';
import createReducer from '../lib/createReducer';

const initialState = Immutable.fromJS({page: 1, movies: [], currStream: ''});

export default createReducer(initialState, {
  [ActionTypes.Movies.getMovies](state, { res }) {
    return state.merge({
      [`movies`]: res.movies,
      [`page`]: res.page
    });
  },

  [ActionTypes.Movies.watchMovie](state, { res }) {
    return state.merge({
      [`currStream`]: res.address
    });
  },

  [ActionTypes.Movies.searchMovie](state, { res }) {
    return state.merge({
      [`movies`]: res
    });
  }

});

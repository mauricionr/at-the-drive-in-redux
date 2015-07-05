import Immutable from 'immutable';
import ActionTypes from '../consts/ActionTypes';
import createReducer from '../lib/createReducer';

const initialState = Immutable.fromJS({movies: [], currStream: ''});

export default createReducer(initialState, {
  [ActionTypes.Movies.getMovies](state, { res }) {
    return state.merge({
      [`movies`]: res
    });
  },

  [ActionTypes.Movies.watchMovie](state, { res }) {
    return state.merge({
      [`currStream`]: res.address
    });
  }
});

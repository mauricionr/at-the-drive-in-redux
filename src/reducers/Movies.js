import Immutable from 'immutable';
import ActionTypes from '../consts/ActionTypes';
import createReducer from '../lib/createReducer';

const initialState = Immutable.fromJS({});

export default createReducer(initialState, {

  [ActionTypes.Movies.getMovies](state, { movies, res }) {
    return state.merge({
      [movies]: res.body
    });
  }
});

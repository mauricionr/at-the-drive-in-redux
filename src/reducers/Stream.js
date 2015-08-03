import Immutable from 'immutable';
import ActionTypes from '../consts/ActionTypes';
import createReducer from '../lib/createReducer';

const initialState = Immutable.fromJS({currStream: ''});

export default createReducer(initialState, {
  [ActionTypes.Stream.watch](state, { res }) {
    return state.merge({
      [`currStream`]: res.address
    });
  },
});

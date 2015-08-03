import Immutable from 'immutable';
import ActionTypes from '../consts/ActionTypes';
import createReducer from '../lib/createReducer';

const initialState = Immutable.fromJS({page: 1, shows: [], currShow: {}, currStream: ''});

export default createReducer(initialState, {
  [ActionTypes.Shows.getShows](state, { res }) {
    return state.merge({
      [`shows`]: JSON.parse(res.shows.text)
    });
  },

  [ActionTypes.Shows.getShow](state, { res }) {
    return state.merge({
      [`currShow`]: JSON.parse(res.text)
    });
  },

});

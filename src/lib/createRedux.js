import _ from 'lodash';
import { createDispatcher, createRedux, composeStores } from 'redux';
import Movies from '../reducers/Movies';

// TODO: import * as reducers

function promiseMiddleware(api, getState) {
  return next =>
    function _r(action) {
      if (action && _.isFunction(action.then)) {
        return action.then(_r);
      }

      if (_.isFunction(action)) {
        return _r(action(api, getState));
      }

      return next(action);
    };
}

export default function (api, intialState) {
  const dispatcher = createDispatcher(
    composeStores(Movies),
    getState => [ promiseMiddleware(api, getState) ]
  );
  const redux = createRedux(dispatcher, intialState);

  return redux;
}

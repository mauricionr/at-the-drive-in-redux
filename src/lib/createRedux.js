import _ from 'lodash';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { reduxReactRouter } from 'redux-router';
import * as reducers from '../reducers/index';
import routes from '../routes';
import {createHistory} from 'history';
import loggerMiddleware from 'redux-logger';

function promiseMiddleware(api, { getState }) {
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

export default function createRedux(api, initialState) {

  // Compose reduxReactRouter with other store enhancers
  const store = compose(
    applyMiddleware(
      promiseMiddleware.bind(null, api),
      loggerMiddleware
    ),
    reduxReactRouter({
      routes,
      createHistory
    })
  )(createStore)(combineReducers(reducers));

  return store;
}

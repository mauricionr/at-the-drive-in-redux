import React from 'react'
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createRedux from './lib/createRedux';
import request from 'superagent';
import qs from 'qs';
import createAPI from './lib/createAPI';
import { createHistory } from 'history';
import { ReduxRouter } from 'redux-router';
import urls from '../config/client';

const api = createAPI(

  ({ method, headers = {}, pathname, query = {}, body = {} }) => {

    pathname = pathname.replace(new RegExp(`^${urls.server}`), '');
    var url = `${urls.server}${pathname}?${qs.stringify(query)}`;

    return window.fetch(url)
      .then(r => r.json())
      .then(r => r)
  }

);

/* global __INITIAL_STATE__:true */
const store = createRedux(api, {});

const history = createHistory();

ReactDOM.render(
  <Provider {...{store}}>
    <ReduxRouter />
  </Provider>,
  document.getElementById('app')
)

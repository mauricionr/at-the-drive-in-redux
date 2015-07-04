import React from 'react'
import { Provider } from 'redux/react';
import createRedux from './lib/createRedux';
import request from 'superagent';
import qs from 'qs';
import createAPI from './lib/createAPI';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import Router from './components/Router';

console.log('wat', BrowserHistory)

const history = new BrowserHistory;
const api = createAPI(
  /**
 * Client's createRequest() method
 */
  ({ method, headers = {}, pathname, query = {}, body = {} }) => {
    pathname = pathname.replace(new RegExp(`^${apiServer.urlPrefix}`), '');
    var url = `${apiServer.urlPrefix}${pathname}`;

    return request(method, url)
      .query(qs.stringify(query))
      .set(headers)
      .send(body);
  }
);

/* global __INITIAL_STATE__:true */
const redux = createRedux(api, {});

React.render(
  <Provider redux={redux}>
    {() => <Router {...{ history }} />}
  </Provider>,
  document.getElementById('app')
)

import React from 'react'
import { Provider } from 'react-redux';
import createRedux from './lib/createRedux';
import request from 'superagent';
import qs from 'qs';
import createAPI from './lib/createAPI';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import Router from './components/Router';
import urls from '../config/client';
import AsyncProps from 'react-router/lib/experimental/AsyncProps';

const history = new BrowserHistory;
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

React.render(
  <Provider {...{store}}>
    {() => <Router {...{ history, store }} />}
  </Provider>,
  document.getElementById('app')
)

'use strict';

import React from 'react';
import { Route } from 'react-router';
import { Application, MovieListContainer, MovieScreen } from './components/index';

export default (
  <Route component={Application}>
    <Route path="/" component={MovieListContainer} />
    <Route path="/screen" component={MovieScreen} />
  </Route>
);

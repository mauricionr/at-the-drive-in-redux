'use strict';

import React from 'react';
import { Route } from 'react-router';
import Application from './components/Application';
import MovieListContainer from './components/MovieListContainer';

export default (
  <Route component={Application}>
    <Route path="/" component={MovieListContainer} />
  </Route>
);

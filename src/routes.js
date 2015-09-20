'use strict';

import React from 'react';
import { Route } from 'react-router';
import { Application, MovieListContainer, Screen } from './components/index';

export default (
  <Route component={Application}>
    <Route path="/" component={MovieListContainer} />
    <Route path="/screen" component={Screen} />
  </Route>
);

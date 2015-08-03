'use strict';

import React from 'react';
import { Router, Route } from 'react-router';
import { Application, MovieListContainer, ShowListContainer, ShowDetails, Screen } from '../index';

class AppRouter extends React.Component {

  static propTypes = {
    history: React.PropTypes.object.isRequired
  }

  render() {
    return (
      <Router {...this.props}>
        <Route component={Application}>
          <Route path="/" component={MovieListContainer} {...this.props} />
          <Route path="/screen" component={Screen} />
          <Route path="/shows" component={ShowListContainer} {...this.props} />
          <Route path="/show-details" component={ShowDetails} />
        </Route>
      </Router>
    );
  }
}

export default AppRouter;

import React from 'react';
import { Header } from '../index';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as moviesActions from '../../actions/movies';
import * as showsActions from '../../actions/shows';

@connect(({ }) => ({ }))
class Application extends React.Component {

  render() {
    const { props: { children } } = this;

    return (
      <div className="container">
        <Header {...bindActionCreators({ ...moviesActions, ...showsActions }, this.props.dispatch)} />
        {children}
      </div>
    );
  }
}

export default Application;

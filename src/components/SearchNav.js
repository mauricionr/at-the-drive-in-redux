import React from 'react';

export default class SearchNav extends React.Component {

  constructor(props, context) {
    super(props, context);

    console.log('oh no', this.props)
  }

  _next() {
    this.props.getMovies({
      page: this.props.redux.getState().Movies.toJS().page,
      motion: 1
    })
  }

  _last() {
    this.props.getMovies({
      page: this.props.redux.getState().Movies.toJS().page,
      motion: -1
    })
  }

  render() {
    return (
      <div className="search-nav">
        <button onClick={this._last.bind(this)}>last</button>
        <button className="right" onClick={this._next.bind(this)}>next</button>
      </div>
    );
  }

}

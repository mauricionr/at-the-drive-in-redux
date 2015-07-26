import React from 'react';

export default class SearchNav extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  _next() {
    this.props.getMovies({
      page: this.props.store.getState().Movies.toJS().page,
      motion: 1,
      genre: (this.props.store.getState().Movies.toJS().filtering.genre.on) ? this.props.store.getState().Movies.toJS().filtering.genre.value : undefined,
      sort: (this.props.store.getState().Movies.toJS().filtering.sort.on) ? this.props.store.getState().Movies.toJS().filtering.sort.value : undefined
    })
  }

  _last() {
    this.props.getMovies({
      page: this.props.store.getState().Movies.toJS().page,
      motion: -1,
      genre: (this.props.store.getState().Movies.toJS().filtering.genre.on) ? this.props.store.getState().Movies.toJS().filtering.genre.value : undefined,
      sort: (this.props.store.getState().Movies.toJS().filtering.sort.on) ? this.props.store.getState().Movies.toJS().filtering.sort.value : undefined
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

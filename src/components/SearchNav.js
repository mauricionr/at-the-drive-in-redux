import React from 'react';

export default class SearchNav extends React.Component {

  constructor(props, context) {
    super(props, context);
  }

  _move(dir) {
    this.props.getMovies({
      page: this.props.store.getState().Movies.toJS().page,
      motion: dir,
      genre: (this.props.store.getState().Movies.toJS().filtering.genre.on) ? this.props.store.getState().Movies.toJS().filtering.genre.value : undefined,
      sort: (this.props.store.getState().Movies.toJS().filtering.sort.on) ? this.props.store.getState().Movies.toJS().filtering.sort.value : undefined
    })
  }

  render() {
    return (
      <div className="search-nav">
        <button onClick={this._move.bind(this, -1)}>last</button>
        <button className="right" onClick={this._move.bind(this, 1)}>next</button>
      </div>
    );
  }

}

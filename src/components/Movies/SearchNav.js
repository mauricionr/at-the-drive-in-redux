import React, {Component} from 'react';

export default class SearchNav extends Component {

  constructor(props, context) {
    super(props, context);
  }

  _move(dir) {
    this.props.getMovies({
      page: this.props.page,
      motion: dir,
      genre: (this.props.filtering.genre.on) ? this.props.filtering.genre.value : undefined,
      sort: (this.props.filtering.sort.on) ? this.props.filtering.sort.value : undefined
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

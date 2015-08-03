import React, { PropTypes } from 'react';
import { Navigation } from 'react-router';

let ShowsList = React.createClass({

  mixins: [ Navigation ],

  _playShow(i) {
    this.props.getShow(this.props.shows[i]._id);
    this.transitionTo(`/show-details`, ...this.props);
  },

  _renderShows() {
    let shows = [];

    this.props.shows.map((show, i) => {

      let divStyle = {
        height: '345',
        width: '230',
        backgroundImage: 'url(' + show.images.poster + ')',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat',
      }

      shows.push(
        <div className="movie clearfix" key={i}>
          <div style={divStyle} onClick={() => this._playShow(i)}></div>
          <h4>{show.title}</h4>
        </div>
      )
    });

    return shows;
  },

  render() {
    return (
      <div className="movie-list">
        {this._renderShows()}
      </div>
    );
  }

});

export default ShowsList;

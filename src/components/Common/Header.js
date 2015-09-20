import React, { Component, PropTypes } from 'react';
import { Search } from '../index';
import { Nav, Navbar, NavDropdown, Button, MenuItem } from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import * as moviesActions from '../../actions/movies';
import { pushState } from 'redux-router';

export default class Header extends Component {

  constructor(props) {
    super(props);
  }

  onSelectGenre(genre) {
    this.props.getMovies({ page: 1, genre: genre });
    this.props.dispatch(
      pushState(null, '/')
    );
  }

  onSelectHighestRated() {
    this.props.getMovies({ page: 1, sort: 'rating' })
    this.props.dispatch(
      pushState(null, '/')
    );
  }

  onSelectTVShows() {
    this.props.getShows();
    this.props.dispatch(
      pushState(null, '/shows')
    );
  }

  onSelectMovies() {
    this.props.getMovies({ page: 1 })
    this.props.dispatch(
      pushState(null, '/')
    );
  }

  onSelectNowPlaying() {
    this.props.dispatch(
      pushState(null, '/screen')
    );
  }

  menuItems() {
    var genres = ['action', 'adventure', 'animation', 'biography', 'comedy', 'crime',
                  'documentary', 'drama', 'family', 'fantasy', 'film-noir', 'history',
                  'horror', 'music', 'musical', 'mystery', 'romance', 'sci-fi', 'sport',
                  'thriller', 'war', 'western'], items = [];

    genres.map((genre, i) => {
      items.push(<MenuItem key={i} onSelect={()=> this.onSelectGenre(genre)} eventKey={genre}>{genre}</MenuItem>);
    });

    return items;
  }

  render() {
    return (
      <Navbar brand='At the Drive-In' inverse toggleNavKey={0}>
        <Nav right eventKey={0}> {/* This is the eventKey referenced */}
          <Button onClick={this.onSelectMovies.bind(this)}>Movies</Button>
          <Button onClick={this.onSelectTVShows.bind(this)}>TV Shows</Button>
          <Button onClick={this.onSelectHighestRated.bind(this)} href='#'>Highest Rated</Button  >
          <NavDropdown title='Genres' id="genre-dropdown">
            {this.menuItems()}
          </NavDropdown>
          <Button onClick={this.onSelectNowPlaying.bind(this)}>Now Playing</Button>

        </Nav>
      </Navbar>
    );
  }

}

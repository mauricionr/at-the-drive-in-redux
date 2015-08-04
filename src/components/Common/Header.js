import React, { Component, PropTypes } from 'react';
import { Search } from '../index';
import { Nav, Navbar, NavItem, DropdownButton, MenuItem } from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import * as moviesActions from '../../actions/movies';

export default class Header extends Component {

  static contextTypes = {
    router: PropTypes.func.isRequired
  };

  constructor(props, context) {
    super(props, context);
  }

  onSelectGenre(genre) {
    this.props.getMovies({ page: 1, genre: genre });
    this.context.router.transitionTo(`/`);
  }

  onSelectHighestRated() {
    this.props.getMovies({ page: 1, sort: 'rating' })
    this.context.router.transitionTo(`/`);
  }

  onSelectTVShows() {
    this.props.getShows();
    this.context.router.transitionTo(`/shows`);
  }

  onSelectMovies() {
    this.props.getMovies({ page: 1 })
    this.context.router.transitionTo(`/`);
  }

  onSelectNowPlaying() {
    this.context.router.transitionTo(`/screen`);
  }

  menuItems() {
    var genres = ['action', 'adventure', 'animation', 'biography', 'comedy', 'crime',
                  'documentary', 'drama', 'family', 'fantasy', 'film-noir', 'history',
                  'horror', 'music', 'musical', 'mystery', 'romance', 'sci-fi', 'sport',
                  'thriller', 'war', 'western'], items = [];

    genres.map((genre) => {
      items.push(<MenuItem onSelect={()=> this.onSelectGenre(genre)} eventKey={genre}>{genre}</MenuItem>);
    });

    return items;
  }

  render() {
    return (
      <Navbar brand='At the Drive-In' inverse toggleNavKey={0}>
        <Nav right eventKey={0}> {/* This is the eventKey referenced */}
          <NavItem onClick={this.onSelectMovies.bind(this)}>Movies</NavItem>
          <NavItem onClick={this.onSelectTVShows.bind(this)}>TV Shows</NavItem>
          <NavItem eventKey={1} onClick={this.onSelectHighestRated.bind(this)} href='#'>Highest Rated</NavItem>
          <DropdownButton eventKey={2} title='Genres'>
            {this.menuItems()}
          </DropdownButton>
          <NavItem onClick={this.onSelectNowPlaying.bind(this)}>Now Playing</NavItem>

        </Nav>
      </Navbar>
    );
  }

}

import React from 'react';
import { Link } from 'react-router';
import { Search } from './index';
import { Nav, Navbar, NavItem, DropdownButton, MenuItem } from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import * as moviesActions from '../actions/movies';

export default class Header {

  selectGenre(genre) {
    this.props.getMovies({ page: 1, genre: genre });
  }

  menuItems() {
    var genres = ['action', 'adventure', 'animation', 'biography', 'comedy', 'crime',
                  'documentary', 'drama', 'family', 'fantasy', 'film-noir', 'history',
                  'horror', 'music', 'musical', 'mystery', 'romance', 'sci-fi', 'sport',
                  'thriller', 'war', 'western'], items = [];

    genres.map((genre) => {
      items.push(<MenuItem onSelect={()=> this.selectGenre(genre)} eventKey={genre}>{genre}</MenuItem>);
    });

    return items;
  }

  render() {
    return (
      <Navbar brand='At the Drive-In' inverse toggleNavKey={0}>
        <Nav right eventKey={0}> {/* This is the eventKey referenced */}
          <DropdownButton eventKey={3} title='Genres'>
            {this.menuItems()}
          </DropdownButton>
        </Nav>
      </Navbar>
    );
  }

}

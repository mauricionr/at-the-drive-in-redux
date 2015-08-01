import React from 'react';
import { Link } from 'react-router';
import { Search } from '../index';
import { Nav, Navbar, NavItem, DropdownButton, MenuItem } from 'react-bootstrap';
import {bindActionCreators} from 'redux';
import * as moviesActions from '../../actions/movies';

export default class Header {

  selectGenre(genre) {
    this.props.getMovies({ page: 1, genre: genre });
  }

  selectHighestRated() {
    this.props.getMovies({ page: 1, sort: 'rating' })
  }

  selectTVShows() {
    this.props.getShows();
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
          <li><Link to="/">Movies</Link></li>
          <li><Link to="/shows">TV Shows</Link></li>
          <NavItem eventKey={1} onClick={this.selectHighestRated.bind(this)} href='#'>Highest Rated</NavItem>
          <DropdownButton eventKey={2} title='Genres'>
            {this.menuItems()}
          </DropdownButton>

        </Nav>
      </Navbar>
    );
  }

}

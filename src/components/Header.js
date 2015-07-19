import React from 'react';
import { Link } from 'react-router';

export default class Header {

  getMovies(query) {
    console.log('oh hahaha', query)
  }

  render() {

    console.log('o hai wassup', this.props)

    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
              <span className="icon-bar"></span>
            </button>
            <Link className="navbar-brand" to="/">At the Drive-In</Link>
          </div>
          <div>
            <ul className="nav navbar-nav navbar-right">
              <li><a href="../navbar/">Newest</a></li>
              <li><a href="../navbar-static-top/">Popular</a></li>
              <li><a href="../navbar-static-top/">Highest Rated</a></li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Genres<span class="caret"></span></a>
                <ul className="dropdown-menu">
                  <li><a onClick={this.getMovies('action')}>Action</a></li>
                  <li><a onClick={this.getMovies('adventure')}>Adventure</a></li>
                  <li><a onClick={this.getMovies('animation')}>Animation</a></li>
                  <li><a onClick={this.getMovies('biography')}>Biography</a></li>
                  <li><a onClick={this.getMovies('comedy')}>Comedy</a></li>
                  <li><a onClick={this.getMovies('crime')}>Crime</a></li>
                  <li><a href="#">Documentary</a></li>
                  <li><a href="#">Drama</a></li>
                  <li><a href="#">Family</a></li>
                  <li><a href="#">Fantasy</a></li>
                  <li><a href="#">Film-Noir</a></li>
                  <li><a href="#">History</a></li>
                  <li><a href="#">Horror</a></li>
                  <li><a href="#">Music</a></li>
                  <li><a href="#">Musical</a></li>
                  <li><a href="#">Mystery</a></li>
                  <li><a href="#">Romance</a></li>
                  <li><a href="#">Sci-Fi</a></li>
                  <li><a href="#">Sport</a></li>
                  <li><a href="#">Thriller</a></li>
                  <li><a href="#">War</a></li>
                  <li><a href="#">Western</a></li>
                </ul>
              </li>
              <li className="active"><a href="./">Fixed top <span className="sr-only">(current)</span></a></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }

}

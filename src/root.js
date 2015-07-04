import React from 'react';
import MovieList from './components/MovieList/MovieList';
import MoviesAPI from './utils/API';

export default class Root extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = { movies: [] }
  }

  componentDidMount() {

    let moviesAPI = new MoviesAPI();

    moviesAPI.getMovies().then((movies) => {
      this.setState({ movies });
    })
  }

  render() {
    return (
      <MovieList movies={this.state.movies} />
    )
  }

}

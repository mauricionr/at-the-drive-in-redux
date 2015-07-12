import ActionTypes from '../consts/ActionTypes';

export function getMovies(query) {

  let page = query.motion ? query.page += query.motion : query.page;

  return async api => ({
    type: ActionTypes.Movies.getMovies,
    res: {
      movies: await api(`/movies?page=${query.page}`),
      page: page
    }
  });
}

export function watchMovie(magnet) {
  return async api => ({
    type: ActionTypes.Movies.watchMovie,
    res: await api(`/torrent-stream?magnet=${magnet}`)
  })
}

export function searchMovie(query) {
  return async api => ({
    type: ActionTypes.Movies.searchMovie,
    res: await api(`/search?movie=${query}`)
  })
}

import ActionTypes from '../consts/ActionTypes';

export function getMovies() {
  return async api => ({
    type: ActionTypes.Movies.getMovies,
    res: await api(`/movies`)
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

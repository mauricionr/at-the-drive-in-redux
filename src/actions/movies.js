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

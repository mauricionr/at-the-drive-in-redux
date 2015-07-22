import ActionTypes from '../consts/ActionTypes';

export function getMovies(query) {

  let page = query.motion ? `?page=${query.page += query.motion}` : `?page=${query.page}`;
  let genre = query.genre ? `&genre=${query.genre}` : ``;
  let sort = query.sort ? `&sort=${query.sort}` : ``;

  return async api => ({
    type: ActionTypes.Movies.getMovies,
    res: {
      movies: await api(`/movies${page}${genre}${sort}`),
      page: page,
      genre: genre
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

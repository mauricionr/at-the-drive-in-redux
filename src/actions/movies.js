import ActionTypes from '../consts/ActionTypes';

export function getMovies(query) {

  let pageNum;

  if((query.page === 1 && query.motion === -1) || !query.motion)
    pageNum = 1;
  else
    pageNum = query.page += query.motion;

  let pageQuery = `page=${pageNum}`;
  let genre = query.genre ? `&genre=${query.genre}` : ``;
  let sort = query.sort ? `&sort=${query.sort}` : ``;

  return async api => ({
    type: ActionTypes.Movies.getMovies,
    res: {
      movies: await api(`/movies?${pageQuery}${genre}${sort}`),
      page: pageNum,
      filtering: {
        sort: {
          on: sort !== ``,
          value: query.sort
        },
        genre: {
          on: genre !== ``,
          value: query.genre
        }
      }
    }
  });
}

export function watchMovie(magnet) {
  return async api => ({
    type: ActionTypes.Stream.watch,
    res: await api(`/torrent-stream?magnet=${magnet}`)
  })
}

export function searchMovie(query) {
  return async api => ({
    type: ActionTypes.Movies.searchMovie,
    res: {
      movies: await api(`/search?movie=${query}`),
      page: 1
    }
  })
}

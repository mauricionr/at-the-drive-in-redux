import ActionTypes from '../consts/ActionTypes';

export function getMovies(query) {
  let genre = query.genre ? `&genre=${query.genre}` : ``;
  let sort = query.sort ? `&sort=${query.sort}` : ``;

  return async api => ({
    type: ActionTypes.Movies.getMovies,
    res: {
      movies: await api(`/movies?page=1${genre}${sort}`),
      page: 1,
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

export function getMoreMovies(query) {
  let pageNum = query.page += query.motion;
  let pageQuery = `?page=${pageNum}`;
  let genre = query.genre ? `&genre=${query.genre}` : ``;
  let sort = query.sort ? `&sort=${query.sort}` : ``;

  return async api => ({
    type: ActionTypes.Movies.getMovies,
    res: {
      movies: await api(`/movies${pageQuery}${genre}${sort}`),
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
    type: ActionTypes.Movies.watchMovie,
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

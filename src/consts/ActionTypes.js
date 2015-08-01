import keyMirror from 'react/lib/keyMirror';

export default {
  Movies: keyMirror({
    getMovies: null,
    searchMovie: null,
    watchMovie: null
  }),

  Shows: keyMirror({
    getShows: null
  })
};

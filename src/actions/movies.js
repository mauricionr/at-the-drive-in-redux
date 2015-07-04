import ActionTypes from '../consts/ActionTypes';

export function getOneByUsername(username) {
  return async api => ({
    type: ActionTypes.Movies.getMovies,
    username,
    res: await api(`/users/${username}`)
  });
}

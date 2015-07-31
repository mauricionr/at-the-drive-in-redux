import ActionTypes from '../consts/ActionTypes';

export function getShows() {
  return async api => ({
    type: ActionTypes.Shows.getShows,
    res: {
      shows: await api(`/shows`)
    }
  });
}

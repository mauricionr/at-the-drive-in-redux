import ActionTypes from '../consts/ActionTypes';

export function getShows() {
  return async api => ({
    type: ActionTypes.Shows.getShows,
    res: {
      shows: await api(`/shows`)
    }
  });
}

export function getShow(id) {
  return async api => ({
    type: ActionTypes.Shows.getShow,
    res: await api(`/show?id=${id}`)
  });
}

export function watchShow(magnet) {
  return async api => ({
    type: ActionTypes.Stream.watch,
    res: await api(`/torrent-stream?magnet=${magnet}`)
  });
}

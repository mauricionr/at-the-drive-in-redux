import io from 'automattic/socket.io-client/socket.io';

export default class MoviesAPI {

  trackers: string[];
  API: any;

  constructor() {
    this.init();

    let socket = io();

    socket.on('connect', () => {
      console.log('socket is wired up on client')
    })

  }

  init() {
    this.API = {
      upcoming: 'https://yts.to/api/upcoming.json', // https://yts.re/api#upcomingDocs
      list: 'https://yts.to/api/v2/list_movies.json' // http://yts.to/api#list_movies
    }

    this.trackers = [
      'udp://open.demonii.com:1337',
      'udp://tracker.istole.it:80',
      'http://tracker.yify-torrents.com/announce',
      'udp://tracker.publicbt.com:80',
      'udp://tracker.openbittorrent.com:80',
      'udp://tracker.coppersurfer.tk:6969',
      'udp://exodus.desync.com:6969',
      'http://exodus.desync.com:6969/announce'
    ];
  }

  magnetURI(hash, title) {
    return `magnet:?xt=urn:btih:${hash}&dn=${encodeURIComponent(title)}&tr=${this.trackers.join('&tr=')}`;
  }

  watchTorrent(magnet: string) {
    return window.fetch('http://localhost:8080/torrent-stream?magnet='+magnet)
      .then(res => res.json())
      .then(res => res.address);
  }

  getMovies() {

    let movies = [];

    return window.fetch('https://yts.to/api/v2/list_movies.json?limit=50')
      .then(res => res.json())
      .then(res => {

        console.log(res)

        res.data.movies.map((movie) => {
          movies.push({
            title: movie.title_long,
            magnet: this.magnetURI(movie.torrents[0].hash, movie.title_long),
            image: movie.medium_cover_image
          })
        });

        return movies;

      });
  }

}

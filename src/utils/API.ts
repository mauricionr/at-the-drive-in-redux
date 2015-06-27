import { Http, HttpConfig, Inject } from 'angular2/angular2';

var trackers = [
  'udp://open.demonii.com:1337',
  'udp://tracker.istole.it:80',
  'http://tracker.yify-torrents.com/announce',
  'udp://tracker.publicbt.com:80',
  'udp://tracker.openbittorrent.com:80',
  'udp://tracker.coppersurfer.tk:6969',
  'udp://exodus.desync.com:6969',
  'http://exodus.desync.com:6969/announce'
];

var API = {
  upcoming: 'https://yts.to/api/upcoming.json', // https://yts.re/api#upcomingDocs
  list: 'https://yts.to/api/v2/list_movies.json' // http://yts.to/api#list_movies
};

export function magnetURI(hash, title) {
  return `magnet:?xt=urn:btih:${hash}&dn=${encodeURIComponent(title)}&tr=${trackers.join('&tr=')}`;
}

export function watchTorrent(magnet) {
  return fetch('http://localhost:3001/api/torrent-stream?magnet='+magnet);
}

export class MoviesAPI {

  constructor(@Inject(Http) private http: Http) {

  }

  getMovies() {

    let movies = [];

    return this.http.get('https://yts.to/api/v2/list_movies.json')
      .map(res => res.json())
      .map(res => {


        console.log('yoyo', res.data.movies)

        res.data.movies.map((movie) => {
          movies.push({
            title: movie.title_long,
            magnet: magnetURI(movie.torrents[0].hash, movie.title_long),
            image: movie.medium_cover_image
          })
        });

        return movies;

      });
  }

}

var express = require('express')
var app = express();
var http = require('http');
var socketio = require('socket.io');
var exec = require('child_process').exec;
var peerflix = require('peerflix');
var request = require('superagent');

app.use(express.static(__dirname + "/"));

app.get('/torrent-stream/:magnet?', function(req, res) {
  let engine = peerflix(req.query.magnet);

  engine.server.on('listening', () => {
    let myLink = 'http://localhost:' + engine.server.address().port + '/';

    res.send({ address: myLink });
  })

})
.get('/movies', function(req, res) {

  request("GET", "https://yts.to/api/v2/list_movies.json?limit=50")
    .end((err, resp) => {

      if(!resp) {
        res.send([]);
        return;
      }

      let movies = [];

      resp.body.data.movies.map((movie) => {
        movies.push({
          title: movie.title_long,
          magnet: magnetURI(movie.torrents[0].hash, movie.title_long),
          image: movie.medium_cover_image
        })
      });

      res.send(movies);
    });

})
.get('/search/:movie?', (req, res) => {
  console.log('searching for ', req.query.movie)

  request("GET", "https://yts.to/api/v2/list_movies.json?query_term=" + req.query.movie)
    .end((err, resp) => {

      if(!resp) {
        res.send([]);
        return;
      }

      let movies = [];

      resp.body.data.movies.map((movie) => {
        movies.push({
          title: movie.title_long,
          magnet: magnetURI(movie.torrents[0].hash, movie.title_long),
          image: movie.medium_cover_image
        })
      });

      res.send(movies);
    });

})

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
});

let server = http.createServer(app).listen(8080, () => {
  console.log('express server listening on port 8080');
});

let io = socketio.listen(server);

io.on('connection', (socket) => {
  console.log('socket connection established on server')
});

function magnetURI(hash, title) {

  let trackers = [
    'udp://open.demonii.com:1337',
    'udp://tracker.istole.it:80',
    'http://tracker.yify-torrents.com/announce',
    'udp://tracker.publicbt.com:80',
    'udp://tracker.openbittorrent.com:80',
    'udp://tracker.coppersurfer.tk:6969',
    'udp://exodus.desync.com:6969',
    'http://exodus.desync.com:6969/announce'
  ];

  return `magnet:?xt=urn:btih:${hash}&dn=${encodeURIComponent(title)}&tr=${trackers.join('&tr=')}`;
}

var express = require('express')
var app = express();
var http = require('http');
var exec = require('child_process').exec;
var peerflix = require('peerflix');
var request = require('superagent');

var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./webpack.config');

app.use(express.static(__dirname + "/"));

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  next()
});

app.listen(8080, () => {
  console.log('express server listening on port 8080');
});

var engine;

function getStreamUrl(engine, res) {
  engine.server.on('listening', () => {
    let myLink = 'http://localhost:' + engine.server.address().port + '/';

    res.send({ address: myLink });
  })
}

app.get('/torrent-stream/:magnet?', function(req, res) {
  if(engine) {
    engine.destroy(function() {
      engine = peerflix(req.query.magnet);
      getStreamUrl(engine, res);
    })
  } else {
    engine = peerflix(req.query.magnet);
    getStreamUrl(engine, res);
  }
})
.get('/movies/:page?:query?:genre?:sort?', function(req, res) {

  var query = "https://yts.to/api/v2/list_movies.json?limit=18&page=";
  query += req.query.page;

  if(req.query.genre) query = [query, "&genre=", req.query.genre].join('');

  if(req.query.sort) query = [query, "&sort_by=", req.query.sort].join('');
  else query = [query, "&sort_by=date_added"].join('');

  request("GET", query)
    .end((err, resp) => {

      if(!resp) {
        res.send([]);
        return;
      }

      res.send(mapMovies(resp.body.data.movies));
    });

})
.get('/search/:movie?', (req, res) => {
  request("GET", "https://yts.to/api/v2/list_movies.json?query_term=" + req.query.movie)
    .end((err, resp) => {

      if(!resp) {
        res.send([]);
        return;
      }

      res.send(mapMovies(resp.body.data.movies));
    });

})
.get('/shows/', (req, res) => {

  request("GET", "http://eztvapi.re/shows/1")
    .end((err, resp) => {

      if(!resp) {
        res.send([]);
        return;
      }

      res.send(resp);

    });

})
.get('/show/:id?', (req, res) => {

  request("GET", "http://eztvapi.re/show/" + req.query.id)
    .end((err, resp) => {

      if(!resp) {
        res.send([]);
        return;
      }

      res.send(resp);

    });

})

function mapMovies(movies) {
  let m = [];

  movies.map((movie) => {
    m.push({
      title: movie.title_long,
      magnet: magnetURI(movie.torrents[0].hash, movie.title_long),
      image: movie.medium_cover_image
    })
  });

  return m;
}

// let io = socketio.listen(server);
//
// io.on('connection', (socket) => {
//   console.log('socket connection established on server')
// });

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

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true,
  stats: {
    colors: true
  }
}).listen(3000, 'localhost', function (err) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at localhost:3000');
});

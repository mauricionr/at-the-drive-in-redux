var express = require('express');
var exec = require('child_process').exec;

const api = express()
  .get('/torrent-stream/:magnet?', function(req, res) {
    var cmd = exec('peerflix "' + req.query.magnet + '" --vlc', function (error, stdout, stderr) {
      res.send({ data: stdout })
    });
  });

const app = express()
  .all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
    res.header('Access-Control-Allow-Headers', 'X-Requested-With')
    next()
  });

app.use('/api', api)
  .listen(3000, () => console.log('listening on port 3000'));

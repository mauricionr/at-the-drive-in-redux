var express = require('express')
var app = express();
var http = require('http');
var socketio = require('socket.io');
var exec = require('child_process').exec;
var peerflix = require('peerflix');

app.use(express.static(__dirname + "/"));

app.get('/torrent-stream/:magnet?', function(req, res) {
  let engine = peerflix(req.query.magnet);

  engine.server.on('listening', () => {
    let myLink = 'http://localhost:' + engine.server.address().port + '/';

    res.send({ address: myLink });
  })

});

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

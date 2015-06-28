var express = require('express')
var app = express();
var http = require('http');
var socketio = require('socket.io');
var exec = require('child_process').exec;

app.use(express.static(__dirname + "/"));

app.get('/torrent-stream/:magnet?', function(req, res) {
  var cmd = exec('peerflix "' + req.query.magnet + '" --webplay', function (error, stdout, stderr) {
    res.send({ data: stdout })
  });
});

app.all('/*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:8080')
  res.header('Access-Control-Allow-Headers', 'X-Requested-With')
  res.header('Access-Control-Allow-Credentials', 'true')
  next()
});

var server = http.createServer(app).listen(8080, () => {
  console.log('express server listening on port 8080');
});

var io = socketio.listen(server);

io.on('connection', (socket) => {
  console.log('socket connection established on server')
});

const config = require('./config');
const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/src/index.html');
})

io.on('connection', (socket) => {
  console.log('welcome, user');

  socket.on('disconnect', () => {
    console.log('goodbye,  user');
  });

  socket.on('msg', (msg) => {
    console.log(`msg received: ${msg}`);
    io.emit('msg', msg);
  });



});

http.listen(config.PORT, () => {
  console.log(`server speaking on port ${config.PORT}`);
})

const express = require('express')
const app = express()
const http = require('http').Server(app)
const port = 3000
const io = require('socket.io')(http)
const fs = require('fs');

app.use(express.static(__dirname + '/client'));

app.get('/', function(req, res){
  res.sendFile(__dirname + '/client/screen.html');
})

io.on('connection', function(socket){
    socket.on('movement', function(data){    
        socket.broadcast.emit('renderPlayers', data);
      if(data.x == 4 && data.y == 6 || data.x == 4 && data.y == 7 || data.x == 16 && data.y == 6 || data.x == 16 && data.y == 7){
        console.log("GOL - Time" + data.name);
        // socket.emit('msger', { txt : "GOOL!!", player : "Galvão", color : "black" });
        // socket.broadcast.emit('msger', { txt : "GOOL!!", player : "Galvão", color : "black" });
      }
      
    });


    socket.on('chat', function(data){
      console.log("Chat: " + data.txt)
      socket.emit('msger', data);
      socket.broadcast.emit('msger', data);
    
    });
});




http.listen('3000', '192.168.0.182', (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

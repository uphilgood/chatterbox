
var express = require('express');
var socket = require('socket.io');
var app = express();
var port = process.env.PORT || 8080;


server = app.listen(port, function(){
    console.log('server is running on port 8080')
});

io = socket(server);

io.on('connection', (socket) => {
    console.log(socket.id);

    socket.on('SEND_MESSAGE', function(data){
        io.emit('RECEIVE_MESSAGE', data);
    })

});


var nsp = io.of('/chat2');
nsp.on('connection', function(socket){
    console.log('someone entered the support-chat');

    socket.on('disconnect', function(){
        console.log('user disconnected from support-chat');
    });

    //recieving and emitting message to all clients in namespace /support
    socket.on('SEND_MESSAGE', function(data){
        console.log('message received: ' + data);
        io.of('/chat2').emit('RECEIVE_MESSAGE', data);
    });
});

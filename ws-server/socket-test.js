var io = require('socket.io-client');

function getQuotes(){
    var socket = io.connect('ws://localhost:3000');
    socket.emit('getquotes');
    socket.on("newquote", function(response) {
        console.log(response);
    });
}

getQuotes()

'use strict';

// configure
var FETCH_INTERVAL = 2500;

// load libraries
var express = require('express');
var http = require('http');
var io = require('socket.io');

// repeats send to websocket every FETCH_INTERVAL seconds
function sendQuotes(socket) {
    console.log("start sending quotes...");
    var timer = setInterval(function() {
		let quote = quoteData[index];
		index++;
		if(index >= quoteData.length){
			index = 0;
		}			
		socket.emit("newquote", JSON.stringify(quote));			
    }, FETCH_INTERVAL);

    socket.on('disconnect', function () {
        clearInterval(timer);
		console.log("stop sending quotes.");
    });
}

// enable static file server for angular files
var app = express(); 
app.use("/", express.static(__dirname + '/..'));
// add node_modules route since addition of 'src' directory
app.use("/node_modules", express.static(__dirname + '/../../node_modules'));

var server = http.createServer(app);

// enable server websockets for sending quotes
var io = io.listen(server);
io.set('origins', '*:*');
io.sockets.on('connection', function(socket) {
    socket.on('getquotes', function(cmd) {
        sendQuotes(socket);
    });
});

// start server
var port = 3000;
server.listen(port);
console.log("server started on port: " + port);

// sample quote data
var index = 0;
var quoteData = [
{"ticker":"AAPL","exchange":"NASDAQ","price":"129.30","change":"+7.95"},
{"ticker":"AAPL","exchange":"NASDAQ","price":"129.31","change":"+7.96"},
{"ticker":"AAPL","exchange":"NASDAQ","price":"129.33","change":"+7.98"},
{"ticker":"AAPL","exchange":"NASDAQ","price":"129.34","change":"+8.00"},
{"ticker":"AAPL","exchange":"NASDAQ","price":"129.28","change":"+7.94"},
{"ticker":"AAPL","exchange":"NASDAQ","price":"129.25","change":"+7.90"},
{"ticker":"AAPL","exchange":"NASDAQ","price":"129.26","change":"+7.91"},
{"ticker":"AAPL","exchange":"NASDAQ","price":"129.27","change":"+7.92"},
{"ticker":"AAPL","exchange":"NASDAQ","price":"129.26","change":"+7.92"},
{"ticker":"AAPL","exchange":"NASDAQ","price":"129.28","change":"+7.94"}];

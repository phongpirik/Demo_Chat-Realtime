var express = require("express");
var app = express();
app.use(express.static("./public"));
app.set("view engine","ejs");
app.set("views","./views");
var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

io.on("connection",function(socket){
	console.log('test:'+socket.id);

	socket.on("disconnect",function(){
		console.log(socket.id +"dis connet");
	});
	socket.on("Client-send-data",function(data){
		console.log(data);
	});
});


app.get('/', (req, res) => res.render('trangchu'));
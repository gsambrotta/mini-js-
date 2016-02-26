var fs = require('fs');
var connect = require("connect");

// Http server
var httpServer = require('http');
var path = require('path');
var httpPort = process.env.PORT || 8080;

// Node Server
var restify = require('restify');
var server = restify.createServer();
server.use(restify.bodyParser());

// Mongoose
var mongoose = require('mongoose');
var config = require('./config');
console.log('mongoose local: ', config.mongoose_auth_local);
var mongodbPort = 8000;
db = mongoose.connect(config.mongoose_auth_local);

// HTTP - sends html/css to the browswer
var sendHTML = function( filePath, contentType, response ){
	fs.readFile(filePath, function(err, content) {
		if(err){
			response.writeHead(500);
			response.end();

		} else {
			response.writeHead(200, {'Content-Type': contentType });
			response.end(content, 'utf-8');
		}
	});
}

// filePath - get app directories
var getFilePath = function(url){
	var filePath = './' + url;
	if(url == '/') filePath = './index.html';
	return filePath;
}

var getContentType = function(filePath){
	var extname = path.extname(filePath);
	var contentType = 'text/html';

	switch(extname){
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
	}
	return contentType;
}

var onHtmlRequestHandler = function(request, response){
	if( process.env.PORT && url === '/users'){
		return;
	}
	var filePath = getFilePath(request.url);
	var contentType = getContentType(filePath);
	sendHTML(filePath, contentType, response);
}

// Schema mongoose
Schema = mongoose.Schema;
var UserSchema = new Schema({
	id: Number,
	name: String,
	surname: String,
	nickname: String,
	email: String,
	password: String
});

var User = mongoose.model('User', UserSchema);
User({
	id: 1,
	name: "jo",
	surname: "samb",
	nickname: "jojo",
	email: "gio@email.com",
	password: "xxx"
}).save( function(err){

	if(err){
		console.log('err!');
	} else {
		console.log('user created!');
	}
});


function getUsers(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	User.find({}, function (err, data) {
		//console.log(data);
		res.write(JSON.stringify(data));
		res.end();
	});
}


function postUser(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "X-Requested-With");

	var user = new User();
	// fill up new user model
	user.id = req.params.id;
	user.name = req.params.name;
	user.surname = req.params.surname;
	user.nickname = req.params.nickname;
	user.email = req.params.email;
	user.password = req.params.password;

	user.save( function(err){
		if(err){
			console.log('err!');
		} else {
			res.write(req.body);
			res.end();
		}
	});
}

server.get('/users', getUsers);
server.post('/users', postUser);

// Listening servers
httpServer.createServer(onHtmlRequestHandler).listen(httpPort);
server.listen(mongodbPort);




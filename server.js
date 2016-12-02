var http = require('http');

const env = process.env.NODE_ENV || 'development';
const config = require('./config/config')[env];

var app = require('./config/express')(config);
require('./config/database')(app, config);
require('./config/passport')();


http.createServer(app).listen(config.port, config.ip, () => {
	var now = new Date();
	console.log('Routes server is running in port localhost:' + config.port + '\nStart time: ' + now);
});
const express =  require('express'),
    consign	= require('consign'),
	bodyParser =  require('body-parser'),
	logger = require('morgan'),
	cookieParser = require('cookie-parser'),
	session = require('express-session'),
	helmet = require('helmet'),
	passport = require('passport');



//Environment setup

module.exports = function(config){

    // Creating app
	var app = express();
	app.set('port', config.port);

    // Setting up views folder, public folder and pug render
	app.use(express.static('./public'));
	app.set('view engine','pug');
	app.set('views','./server/views');

    // Dev logger
	app.use(logger(config.log));

    // Setting up cookies and session
	app.use(cookieParser());
	app.use(session(
		{
			secret:'@the_tru3-m@cHine',
			resave:true,
			saveUninitialized:true,
			cookie: { maxAge: 1000 * 60 * 60 * 3 }
		}
	));

    // Setting up passport authentication
	app.use(passport.initialize());
	app.use(passport.session());

    // Setting up bodyparser handler
	app.use(bodyParser.urlencoded({extended:true}));
	app.use(bodyParser.json());
	app.use(require('method-override')());

    // Setting up helmet protection
	app.use(helmet());
	app.use(helmet.xframe());
	app.use(helmet.xssFilter());
	app.use(helmet.nosniff());
	app.disable('x-power-by');
	app.use(helmet.hidePoweredBy({setTo:'PHP 5.5.14'}));

    // Loading models, controllers and routes into app
	consign({cwd:'server', verbose: false})
		.then('models')
		.then('controllers')
		.then('routes')
		.into(app);


    // Returning app;
	return app;

};

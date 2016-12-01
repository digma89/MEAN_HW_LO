/*--By Diego Rodriguez 11/30/16
    Title: HW_LoyaltyOne */

var express = require('express'),
    morgan = require('morgan'),
    compress = require('compression'),
    bodyParser = require('body-parser'),
    methodOverride = require('method-override');
    config = require('./config');

module.exports = function() {
    var app = express();

    if(process.env.NODE_ENV === 'development'){
        app.use(morgan('dev'));
    }else if(process.env.NODE_ENV === 'production'){
        app.use(compress());
    }

    app.use(bodyParser.urlencoded({
        extended: true
    }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    //Express configured to use EJS
    app.set('views', './app/views');
    app.set('view engine', 'ejs');

    //add the routes that my application use
    require('../app/routes/index.server.routes.js')(app);

    //static access public folder 
    app.use(express.static('public'));

    return app;
};
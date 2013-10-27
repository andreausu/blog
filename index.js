// # Ghost bootloader
// Orchestrates the loading of Ghost

// If no env is set, default to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

if process.env.NODE_ENV == 'production' {
	require('newrelic');
}

var configLoader = require('./core/config-loader.js'),
    error        = require('./core/server/errorHandling');

configLoader.loadConfig().then(function () {
    // The server and its dependencies require a populated config
    require('./core/server');
}).otherwise(error.logAndThrowError);

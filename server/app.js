var path = require('path');
var express = require('express');
var volleyball = require('volleyball');

var app = express(); // Create an express app!
module.exports = app; // Export it so it can be require('')'d

// logging middleware for HTTP requests and responses
app.use(volleyball)

// paths to static resources we will establish routes for further down
var angularPath = path.join(__dirname, '../node_modules/angular');
var publicPath = path.join(__dirname, '../browser');

// __dirname: http://nodejs.org/docs/latest/api/globals.html#globals_dirname
// path.join: http://nodejs.org/api/path.html#path_path_join_path1_path2

// When our server gets a request and the url matches something in our browser
// folder, serve up that file (e.g. app.js, style.css).
// NOTE: this also automatically maps `GET /` to `GET /index.html`!
app.use(express.static(publicPath));

// If we request the angular source code, serve it up from node_modules
app.use(express.static(angularPath));

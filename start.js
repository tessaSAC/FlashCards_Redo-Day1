var chalk = require('chalk');

// Grabbing our server from our server/index.js file.
var server = require('./server');

var PORT = 1337;

server.listen(PORT, function () {
  console.log(chalk.blue('Server started on port', chalk.magenta(PORT)));
});

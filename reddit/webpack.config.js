const path = require('path');

var APP_DIR = path.resolve(__dirname, './src');
var BUILD_DIR = path.resolve(__dirname, './dist');

const configDirs = {
	BUILD_DIR: BUILD_DIR,
	APP_DIR: APP_DIR
};

function buildConfig(env) {
	if (env === 'development' || env === 'production') {
		return require('./webpack.' + env + '.js')(configDirs);
	} else {
		console.log("Wrong webpack build parameter. Possible choices: `development` or `production`.")
	}
}

module.exports = buildConfig;

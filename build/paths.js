var path = require('path');

var appRoot = 'source/';

module.exports = {
	root: appRoot,
	source: appRoot + '**/*.js',
	html: appRoot + '**/*.html',
	style: 'styles/**/*.css',
	output: 'output/',
	doc:'./doc',
	e2eSpecsSrc: 'test/e2e/src/*.js',
	e2eSpecsDist: 'test/e2e/dist/'
};

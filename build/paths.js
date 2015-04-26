var path = require('path');

var appRoot = 'source/';

module.exports = {
	root: appRoot,
	doc:'./doc',
	e2eSpecsSrc: 'test/e2e/src/*.js',
	e2eSpecsDist: 'test/e2e/dist/',

	html: 'source/**/*.html',
	js: 'source/**/*.js',
	css: 'source/**/*.css',
	output: 'output/',

	sampleHtml: 'sample/**/*.html',
	sampleJs: 'sample/**/*.js',
	sampleCss: 'sample/**/*.css',
	sampleOutput: 'output-sample/'
};

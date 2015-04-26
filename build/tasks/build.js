var gulp = require('gulp');
var runSequence = require('run-sequence');
var to5 = require('gulp-babel');
var sourcemaps = require('gulp-sourcemaps');
var paths = require('../paths');
var compilerOptions = require('../babel-options');
var assign = Object.assign || require('object.assign');

gulp.task('build-html', function () {
	return gulp.src(paths.html)
		.pipe(gulp.dest(paths.output));
});

gulp.task('build-css', function() {
	return gulp.src(paths.css)
		.pipe(gulp.dest(paths.output));
});

gulp.task('build-js', ['build-html', 'build-css'], function () {
	return gulp.src(paths.js)
		.pipe(sourcemaps.init())
		.pipe(to5(assign({}, compilerOptions, {modules:'system'})))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.output));
});

gulp.task('build-html-sample', function() {
	return gulp.src(paths.sampleHtml)
		.pipe(gulp.dest(paths.sampleOutput));
});

gulp.task('build-css-sample', function() {
	return gulp.src(paths.sampleCss)
		.pipe(gulp.dest(paths.sampleOutput));
});

gulp.task('build-js-sample', ['build-html-sample', 'build-css-sample'], function() {
	return gulp.src(paths.sampleJs)
		.pipe(sourcemaps.init())
		.pipe(to5(assign({}, compilerOptions, {modules:'system'})))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.sampleOutput));
});

gulp.task('build', function(callback) {
	return runSequence(
		'clean',
		['build-js', 'build-js-sample'],
		callback
	);
});

var gulp = require('gulp');
var paths = require('../paths');
var browserSync = require('browser-sync');

function reportChange(event) {
	console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
}

gulp.task('watch', ['serve'], function () {
	gulp.watch(paths.sampleHtml, ['build-html-sample', browserSync.reload]).on('change', reportChange);
	gulp.watch(paths.sampleCss, ['build-css-sample', browserSync.reload]).on('change', reportChange);
	gulp.watch(paths.sampleJs, ['build-js-sample', browserSync.reload]).on('change', reportChange);
	gulp.watch(paths.html, ['build-html', browserSync.reload]).on('change', reportChange);
	gulp.watch(paths.css, ['build-css', browserSync.reload]).on('change', reportChange);
	gulp.watch(paths.js, ['build-js', browserSync.reload]).on('change', reportChange);
});

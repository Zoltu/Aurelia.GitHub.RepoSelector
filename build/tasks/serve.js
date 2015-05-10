var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', ['build'], function(done) {
	browserSync({
		open: false,
		port: 9005,
		ui: { port: 9006 },
		server: {
			baseDir: ['.'],
			middleware: function (request, response, next) {
				response.setHeader('Access-Control-Allow-Origin', '*');
				next();
			}
		}
	}, done);
});

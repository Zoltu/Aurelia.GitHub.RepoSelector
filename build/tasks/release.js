var gulp = require('gulp');
var jsonEditor = require('gulp-json-editor');

gulp.task('jspm-prepare-release', ['build'], function() {
	mutatePackagesJson = function(json) {
		delete json.devDependencies;
		delete json.dependencies;
		delete json.main;
		delete json.jspm.devDependencies;
		json.jspm.directories.lib = ".";
		return json;
	};
	jsonOptions = {
		'indent_char': '\t',
		'indent_size': 1
	};
	gulp.src('./package.json')
		.pipe(jsonEditor(mutatePackagesJson, jsonOptions))
		.pipe(gulp.dest('./output'));
});

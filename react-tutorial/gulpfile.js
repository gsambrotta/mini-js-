'use strict';

const gulp = require('gulp');
const bundle = require('./task/bundle');

gulp.task('bundle', bundle);
gulp.task('default', ['bundle']);


// Since i have just one task, is there a way to keep the code of bundle.js, here?
// Maybe smth like this would work?
/*
gulp.task('bundle', function() {
	const watchify = require('watchify');
	const browserify = require('browserify');
	const babelify = require('babelify');
	const source = require('vinyl-source-stream');


	const opts = Object.assign({}, watchify.args, {
	  entries: ['./public/scripts/app.js'],
	  debug: true
	});

	const b = watchify(browserify(opts));
	b.transform(babelify);
	b.on('update', bundle);

	function bundle() {
	  return b.bundle()
	    .pipe(source('bundle.js'))
	    .pipe(gulp.dest('./public/js'));
	}
});
*/

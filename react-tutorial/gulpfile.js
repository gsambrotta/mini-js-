//'use strict';

var gulp = require('gulp');
var watchify = require('watchify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var reactify = require('reactify');


gulp.task('browserify', function() {
    var bundler = browserify({
        entries: ['./public/scripts/app.js'], // Only need initial file, browserify finds the deps
        transform: [reactify], // We want to convert JSX to normal javascript
        debug: true, // Gives us sourcemapping
        cache: {}, packageCache: {}, fullPaths: true // Requirement of watchify
    });
    var watcher  = watchify(bundler);

    return watcher
    .on('update', function () { // When any files update
        var updateStart = Date.now();
        console.log('updating..');

        watcher.bundle() // Create new bundle that uses the cache for high performance
        .pipe(source('app.js'))
        .pipe(gulp.dest('./public/js/'));
        console.log('updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle() // Create the initial bundle when starting the task
    .pipe(source('app.js'))
    .pipe(gulp.dest('./public/js/'));
});

gulp.task('default', ['browserify']);

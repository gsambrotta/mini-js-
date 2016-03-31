'use strict';

var gulp = require('gulp');  // Base gulp package
var babelify = require('babelify'); // Used to convert ES6 & JSX to ES5
var browserify = require('browserify'); // Providers "require" support, CommonJS
var watchify = require('watchify'); // Watchify for source changes
var livereload = require('gulp-livereload'); // Livereload support for the browser
var source = require('vinyl-source-stream'); // Vinyl stream support
var buffer = require('vinyl-buffer'); // Vinyl stream support
var merge = require('utils-merge'); // Object merge tool

var notify = require('gulp-notify'); // Provides notification to both the console and Growel
var gutil = require('gulp-util'); // Provides gulp utilities, including logging and beep


// Configuration for Gulp
var config = {
  js: {
    src: './public/scripts/app.js',
    watch: './public/scripts/**/*',
    outputDir: './public/js',
    outputFile: 'build.js',
  },
};

// Error reporting function
function mapError(err) {
  if (err.fileName) {
    // Regular error
    gutil.log(err.name
      + ': ' + err.fileName.replace(__dirname + '/public/scripts/', '')
      + ': ' + 'Line ' + err.lineNumber
      + ' & ' + 'Column ' + err.columnNumber || err.column
      + ': ' + err.description);
  } else {
    // Browserify error..
    gutil.log(err.name
      + ': babelify error: '
      + err.message);
  }
}

// Completes the final file outputs
function bundle(bundler) {

  bundler
    .bundle()
    .on('error', mapError) // Map error reporting
    .pipe(source('build.js')) // Set source name
    .pipe(buffer()) // Convert to gulp pipeline
    .pipe(gulp.dest(config.js.outputDir)) // Set the output folder
    .pipe(notify({
      message: 'Generated file: <%= file.relative %>',
    })) // Output the file being created
    .pipe(livereload()); // Reload the view in the browser
}

// Gulp task for build
gulp.task('default', function() {
  livereload.listen(); // Start livereload server
  var args = merge(watchify.args, { debug: true }); // Merge in default watchify args with browserify arguments

  var bundler = browserify(config.js.src, args) // Browserify
    .plugin(watchify, {ignoreWatch: ['**/node_modules/**']}) // Watchify to watch source file changes
    .transform(babelify, {presets: ['es2015', 'react']}); // Babel tranforms

  bundle(bundler); // Run the bundle the first time (required for Watchify to kick in)

  bundler.on('update', function() {
    bundle(bundler); // Re-run bundle on source updates
  });
});

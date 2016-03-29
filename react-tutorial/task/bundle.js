'use strict';

const gulp = require('gulp');
const watchify = require('watchify');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');


const opts = Object.assign({}, watchify.args, {
  entries: ['./public/scripts/app.js'],
  debug: true
});

const b = watchify(browserify(opts));
b.transform(babelify, {presets: ["es2015", "react"]});
b.on('update', bundle);

function bundle() {
  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/js'));
}

module.exports = bundle;

// Is that enough to get my code transf with babel, concat and watched?

/* jshint node: true */
'use strict';

var gulp = require('gulp'),
    g = require('gulp-load-plugins')({lazy: false}),
    bower = require('./bower');

var exportPath = './resources/web';

/**
 * Reveal
 */
gulp.task('reveal', function () {
  return gulp.src('bower_components/reveal.js/**/**')
    .pipe(gulp.dest( exportPath + '/reveal.js'));
});
/**
 * Impress
 */
gulp.task('impress', function () {
  return gulp.src('bower_components/impress.js/**/**')
    .pipe(gulp.dest( exportPath + '/impress.js'));
});

gulp.task('default', ['reveal', 'impress']);

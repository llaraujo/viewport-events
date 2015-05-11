'use strict';

var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    jsmin = require('gulp-jsmin'),
    rename = require('gulp-rename');


gulp.task('lint', function() {
  return gulp.src('./src/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(jsmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('min', function() {
  return gulp.src('./src/*.js')
    .pipe(jsmin())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./'));
});

gulp.task('copy', function() {
  return gulp.src('./src/*.js')
    .pipe(gulp.dest('./'));
});


gulp.task('dist', function() {
  gulp.run('copy');
  gulp.run('min');
});

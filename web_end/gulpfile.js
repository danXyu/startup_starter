'use strict';

/**
 * Gulp and Gulp Dependencies
 */
var gulp = require('gulp');
var jshint = require('gulp-jshint');
var sass = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

/**
 * Javascript Linting
 */
gulp.task('lint', function() {
    return gulp.src('js/*.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

/**
 * Sass Compilation
 */
gulp.task('less', function() {
    return gulp.src('scss/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('css'));
});

/**
 * Concatenate & Minify JS
 */
gulp.task('scripts', function() {
    return gulp.src('js/*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('uploads'))
        .pipe(rename('all.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('uploads'));
});

/**
 * Watch Files For Changes
 */
gulp.task('watch', function() {
    gulp.watch('js/*.js', ['lint', 'scripts']);
    gulp.watch('scss/*.scss', ['sass']);
});

/**
 * Default Task
 */
gulp.task('default', ['lint', 'less', 'scripts', 'watch']);
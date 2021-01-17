'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var watch = require('gulp-watch');

//SASS Task
gulp.task('sass', function () {
	return gulp.src('./assets/sass/**/*.sass')
		.pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./assets/css'));
});

//Gulp-watch Task
gulp.task('watch', function () {
	gulp.watch('./assets/sass/**/*.sass', ['sass'])
});

//Default Task
gulp.task('default', ['sass', 'watch']);
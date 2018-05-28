// This configuration is OPTIONAL

// in order to use this file
// both gulp and gulp-sass and node-sass must be install globally
// "npm install -g node-sass gulp gulp-cli"
// type "gulp default" into the terminal
// CTRL + C / CMD + C to cancel

// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function() {
    gulp.src('assets/scss/main.scss')
        .pipe(sass())
        .pipe(gulp.dest('assets/css'))
});

gulp.task('default', ['sass'], function() {
    gulp.watch('assets/scss/*.scss', ['sass']);
})
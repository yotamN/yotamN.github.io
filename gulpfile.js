/* global sourcemaps */
var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var sourcemaps  = require('gulp-sourcemaps');
var ts = require('gulp-typescript');
 
gulp.task('tsc', function () {
  var tsResult = gulp.src('app/**/*.ts')
    .pipe(ts({
        noImplicitAny: true,
        out: 'output.js',
        removeComments: true
      }));
  return tsResult.js.pipe(gulp.dest('app'));
});

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "."
    });

    gulp.watch("app/**/*.ts", ['tsc']);
    gulp.watch("assets/css/*.scss", ['sass']);
    gulp.watch("*.html").on('change', browserSync.reload);
});

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
    return gulp.src("assets/css/*.scss")
		.pipe(sourcemaps.init())
        .pipe(sass())
		.pipe(sourcemaps.write())
        .pipe(gulp.dest("assets/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
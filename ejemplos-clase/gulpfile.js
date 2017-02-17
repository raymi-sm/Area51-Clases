var gulp    = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass    = require ('gulp-sass');
    //babel   = require('gulp-babel');

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "02",
        port: 1504
    });

    gulp.watch("02/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("02/*.html").on('change', browserSync.reload);
    gulp.watch("02/*.js").on('change', browserSync.reload);
});

gulp.task("sass", function(){
  return gulp.src('02/*.scss')
  .pipe(sass({ outputStyle: 'compressed'}))
  .pipe(gulp.dest('02/'));
});

gulp.task('default', ['serve']);

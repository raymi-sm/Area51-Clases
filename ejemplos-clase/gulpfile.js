var gulp    = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass    = require ('gulp-sass');
    //babel   = require('gulp-babel');

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "01",
        port: 1500
    });

    gulp.watch("01/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("01/*.html").on('change', browserSync.reload);
    gulp.watch("01/*.js").on('change', browserSync.reload);
});

gulp.task("sass", function(){
  return gulp.src('01/*.scss')
  .pipe(sass({ outputStyle: 'compressed'}))
  .pipe(gulp.dest('01/'));
});

gulp.task('default', ['serve']);

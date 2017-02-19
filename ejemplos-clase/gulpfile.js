var gulp    = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass    = require ('gulp-sass');
    //babel   = require('gulp-babel');

gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "03",
        port: 1504
    });

    gulp.watch("03/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("03/*.html").on('change', browserSync.reload);
    gulp.watch("03/*.js").on('change', browserSync.reload);
});

gulp.task("sass", function(){
  return gulp.src('03/*.scss')
  .pipe(sass({ outputStyle: 'compressed'}))
  .pipe(gulp.dest('03/'));
});

gulp.task('default', ['serve']);

   var gulp    = require('gulp'),
    browserSync = require('browser-sync').create(),
    sass    = require ('gulp-sass');
    //babel   = require('gulp-babel');

gulp.task('serve', function() {

    browserSync.init({
        server: "08",
        port: 1504
    });

    //gulp.watch("05/*.scss", ['sass']).on('change', browserSync.reload);
    gulp.watch("08/css/*.css").on('change', browserSync.reload);
    gulp.watch("08/*.html").on('change', browserSync.reload);
    gulp.watch("08/*.js").on('change', browserSync.reload);
});

/*gulp.task("sass", function(){
  return gulp.src('05/*.scss')
  .pipe(sass({ outputStyle: 'compressed'}))
  .pipe(gulp.dest('05/'));
});*/

gulp.task('default', ['serve']);

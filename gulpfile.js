var gulp    = require('gulp'), 
    browserSync = require('browser-sync').create();

gulp.task('serve', function() {

    browserSync.init({
        server: "Ejemplos/Modulo02/clase11-CSS-Cajas/ejercicios-diseño/Diseño-4/",
        port: 1501
    });

    gulp.watch("Ejemplos/Modulo02/clase11-CSS-Cajas/ejercicios-diseño/Diseño-4/*.css").on('change', browserSync.reload);
    gulp.watch("Ejemplos/Modulo02/clase11-CSS-Cajas/ejercicios-diseño/Diseño-4/*.html").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);
var { src, dest } = require('gulp');
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require("gulp-uglify")
var minify = require("gulp-clean-css");
var browserSync = require('browser-sync').create();

gulp.task('js', function() {
    return src('src/js/*.js')        
        //.pipe(babel({ presets: ['@babel/env']}))
        .pipe(include())
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(dest('app/js'))
}); 

gulp.task('themes', function() {
    return src('src/css/themes/*.css')
      .pipe(minify())
      .pipe(dest('app/css'));
});

gulp.task('html', function() {
    return src('*.html')
      .pipe(concat('app.html'))
      .pipe(dest('app/'));
});

gulp.task('watch', function(){
    gulp.watch('src/js/*.js', gulp.series('js')).on('change', function () {browserSync.reload();});
    gulp.watch('src/css/themes/*.css', gulp.series('themes')).on('change', function () {browserSync.reload();});
    gulp.watch('src/css/other/*.scss', gulp.series('scss')).on('change', function () {browserSync.reload();});
    gulp.watch('*.html', gulp.series('html')).on('change', function () {browserSync.reload();});
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "app",
            index: "app.html"
        },   
        callbacks: {
            ready: function(err, bs) {
                console.log("----------------------------------");
                console.log("[\x1b[31m v0.1 FaCS - Rental Assistance Decision Tree \x1b[37m] \- \x1b[32mdeveloped by Daniel Kandilas");
                console.log("----------------------------------");
            }
        },
        port:1350,
        ui: false
    });
});
gulp.task('run', gulp.parallel('js', 'themes', 'scss', 'html', 'watch','browser-sync'));
var { src, dest } = require('gulp');
var gulp = require('gulp');
var concat = require('gulp-concat');
var include = require("gulp-include");
var uglify = require("gulp-uglify")
var minify = require("gulp-clean-css");
var browserSync = require('browser-sync').create();

gulp.task('js', function() {
    return src([
        'src/js/jquery.js',
        'src/js/bootstrap.js',
        'src/js/popper.js',
        'src/js/main.js'
        ])      
        .pipe(include())  
        .pipe(concat('app.min.js'))
        .pipe(uglify())
        .pipe(dest('build/'))
}); 

gulp.task('css', function() {
    return src([
            'src/css/bootstrap.css',
            'src/css/radiobtn.css',
            'src/css/style.css'
            ])
      .pipe(concat('app.min.css'))
      .pipe(minify())
      .pipe(dest('build/'));
});

gulp.task('html', function() {
    return src('src/*.html')
      .pipe(concat('index.html'))
      .pipe(dest('build/'));
});

gulp.task('watch', function(){
    gulp.watch('src/js/*.js', gulp.series('js')).on('change', function () {browserSync.reload();});
    gulp.watch('src/css/*.css', gulp.series('css')).on('change', function () {browserSync.reload();});
    gulp.watch('*.html', gulp.series('html')).on('change', function () {browserSync.reload();});
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "build",
            index: "index.html"
        },   
        callbacks: {
            ready: function(err, bs) {
                console.log("---------------------------------------------------------------");
                console.log("[\x1b[31m v0.1 FaCS - Rental Assistance Decision Tree \x1b[37m] \- \x1b[32mdeveloped by Daniel Kandilas \x1b[37m");
                console.log("---------------------------------------------------------------");
            }
        },
        port:1350,
        ui: false
    });
});
gulp.task('run', gulp.parallel('js', 'css', 'html', 'watch','browser-sync'));
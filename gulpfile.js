/*var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport= require('postcss-import'),
sass = require('gulp-sass'),
browserSync = require('browser-sync').create();

gulp.task('default', function() {
	console.log("hurrah - you created a Gulp task");
});

gulp.task('html', function() {
	console.log("I have created html");
});
 
gulp.task('styles', function() {
	return gulp.src('./app/assets/styles/styles.css')
	 .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
	 .pipe(gulp.dest('./app/temp/styles'));
});
/*
gulp.task('watch', function() { 

	browserSync.init({
      server: {
      	baseDir: "app"
      }
	});

	watch('./app/index.html', function(){
		browserSync.reload();
	});

	watch('./app/assets/styles/**//*.css', function() {
		gulp.start('cssInject');
	});
});

gulp.task('cssInject', [styles], function() {
	return gulp.src('./app/assets/styles/styles.scss')
	 .pipe(browserSync.stream());
});*/
/* test*/

/*gulp.task('sass', function () {  
    gulp.src('./app/assets/styles/styles.scss')
        .pipe(sass({includePaths: ['scss']}))
        .pipe(gulp.dest('./app/assets/styles/temp/css/'));
});

gulp.task('browser-sync', function() {  
    browserSync.init(["./app/assets/styles/*.css", "js/*.js"], {
        server: {
            baseDir: "./app/"
        }
    });
});

gulp.task('default', ['sass', 'browser-sync'], function () {  
    gulp.watch("./app/assets/styles/*.scss", ['sass']);
});





gulp.task('styleSass', function(){
	return gulp.src('./app/assets/styles/styles.scss')

	.pipe(sass())
	.on('error', function(errorinfo){
		console.log(errorinfo.toString());
		this.emit('end');
	})

	.pipe(gulp.dest('./app/assets/styles/temp/css/'))
});*/


require('./gulp/tasks/styles');
require('./gulp/tasks/watch');
require('./gulp/tasks/sprites');
require('./gulp/tasks/scripts');



/* test*/







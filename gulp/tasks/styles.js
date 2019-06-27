var gulp = require('gulp'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport= require('postcss-import'),
sass = require('gulp-sass'),
mixins= require('postcss-mixins');



gulp.task('styleSass', function(){
	return gulp.src('./app/assets/styles/styles.scss')

	.pipe(sass())
	.on('error', function(errorinfo){
		console.log(errorinfo.toString());
		this.emit('end');
	})

	.pipe(gulp.dest('./app/assets/styles/temp/css/'))
});
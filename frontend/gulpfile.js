// All used gulp modules
var gulp 		= require('gulp'),
    uglify 	= require('gulp-uglify'),
    concat 	= require('gulp-concat'),
    rename 	= require('gulp-rename'),
    sass 		= require('gulp-sass');
 
// Error message function
function errorLog(error) {
  console.error(error);
  this.emit('end');
}
 
// Scripts Task
gulp.task('scripts', function () {

	// Uglify
  gulp.src([
  		'scripts/*.js', '!scripts/*.min.js', 
  		'app/services/*.js', '!app/services/*.min.js',
  		'app/*.js', '!app/*.min.js',
  		'app/filters/*.js', '!app/filters/*.min.js',
  		'app/controllers/*.js', '!app/controllers/*.min.js'
  	])
    .pipe(uglify())
    .on('error', errorLog)
    .pipe(rename({
    	extname: '.min.js'
  	}))
    .pipe(gulp.dest(function(file) {
	    return file.base;
	  }));

  // Concatenate
  gulp.src(
  	[
  		'scripts/angular.min.js', 
  		'scripts/angular-route.js',
  		'scripts/angular-resource.min.js',
  		'app/filters/experiencesDateFilter.min.js',
  		'node_modules/angular-mocks/angular-mocks.js',
  		'app/app.min.js',
  		'app/controllers/experiencesController.min.js',
  		'app/services/experiencesFactory.min.js',
  		'scripts/bootstrapUI/ui-bootstrap-tpls-0.14.0.min.js'
  	])
  	.on('error', errorLog)
    .pipe(concat('prodApp.js'))
    .on('error', errorLog)
    .pipe(gulp.dest('.'));
});

// Styles task
gulp.task('styles', function() {
  gulp.src('styles/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('minified'));
});
 
// Watch Task
gulp.task('watch', function () {
  gulp.watch(
  	[
  		'app/**/*.js', '!app/**/*.min.js',
  		'scripts/**/*.js', '!scripts/**/*.min.js',
  		
  	], 
  	['scripts']);

  gulp.watch(
  	[
  		'styles/**/*.scss', 		
  	], 
  	['styles']);
});

// Define our default task
gulp.task('default', ['scripts', 'styles', 'watch']);
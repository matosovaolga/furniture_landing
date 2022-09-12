const gulp = require('gulp');
const cleanCSS = require('gulp-clean-css'),
	livereload = require('gulp-livereload'),
	sass = require('gulp-sass')(require('sass'));
const uglify = require('gulp-uglify');
const eslint = require('gulp-eslint');
const pipeline = require('readable-stream').pipeline;
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
//CSS 

gulp.task('styles', function () {
	return gulp.src('assets/sass/*.scss')
		.pipe(sass({ style: 'expanded', }))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(gulp.dest('dist/css'))
		.pipe(cleanCSS({ debug: true }, (details) => {
			console.log(`${details.name}: ${details.stats.originalSize}`);
			console.log(`${details.name}: ${details.stats.minifiedSize}`);
		}))

		.pipe(gulp.dest('dist/css'))
		.pipe(livereload());
});

// Images
gulp.task('images', function () {
	return gulp.src('assets/images/**/*')
		.pipe(gulp.dest('dist/images'))
		.pipe(livereload());

});

// JsvaScript

gulp.task('scripts', function () {
	return gulp.src(['assets/js/**/*.js'])
		.pipe(concat('main.js'))
		.pipe(eslint())
		.pipe(eslint.format())
		.pipe(uglify())
		.pipe(gulp.dest('./dist/js'));
});


gulp.task('watch', function () {
	livereload.listen();

	gulp.watch('assets/sass/**/*.scss', gulp.series(['styles']));
	gulp.watch('assets/js/**/*.js', gulp.series(['scripts']));
	gulp.watch('assets/images/**/*', gulp.series(['images']));

});
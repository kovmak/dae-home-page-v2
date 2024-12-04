import gulp from 'gulp';
import gulpSass from 'gulp-sass';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import cleanCSS from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';
import htmlreplace from 'gulp-html-replace';
import rename from 'gulp-rename';
import sassLib from 'sass';

const sass = gulpSass(sassLib);

const paths = {
  js: './src/js/**/*.js',
  scss: './src/scss/**/*.scss',
  images: './src/images/**/*',
  languages: './src/languages/**/*', 
  dist: './dist',
};

// JavaScript Task
gulp.task('scripts', () => {
  return gulp.src(paths.js)
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest(`${paths.dist}/js`));
});

// SCSS Task
gulp.task('styles', () => {
  return gulp.src(paths.scss)
    .pipe(sass().on('error', sass.logError))
    .pipe(cleanCSS())
    .pipe(gulp.dest(`${paths.dist}/css`));
});

// Languages Task
gulp.task('languages', () => {
  return gulp.src(paths.languages)
    .pipe(gulp.dest(`${paths.dist}/languages`)); 
});

// HTML Task
gulp.task('html', () => {
  return gulp.src('src/*.html')
    .pipe(htmlreplace({
      'image': 'dist/images/'
    }))
    .pipe(gulp.dest('dist'));
});

// Build Task 
gulp.task('build', gulp.series('scripts', 'styles', 'languages', 'html'));

// Default Task 
gulp.task('default', gulp.series('build'));

// Watch Task 
gulp.task('watch', () => {
  gulp.watch(paths.js, gulp.series('scripts'));      
  gulp.watch(paths.scss, gulp.series('styles'));    
  gulp.watch(paths.languages, gulp.series('languages')); 
  gulp.watch('src/*.html', gulp.series('html'));     
});

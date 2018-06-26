var gulp        = require('gulp');
var browserSync = require('browser-sync');
var sass        = require('gulp-sass');
var prefix      = require('gulp-autoprefixer');
var cssnano     = require('gulp-cssnano');
var concat      = require('gulp-concat');
var uglify      = require('gulp-uglify');
var babel       = require('gulp-babel');
var render      = require('gulp-nunjucks-render');

/**
 * Launch the Server
 */
gulp.task('browser-sync', ['nunjucks', 'sass', 'scripts', 'assets'], function() {
  browserSync.init({
    server: "dist/",
    port: 2018
  });
});

/**
 * Compile files from scss
 */
gulp.task('sass', function () {
  return gulp.src('src/scss/styles.scss')
  .pipe(sass({
    includePaths: ['scss'],
    onError: browserSync.notify
  }))
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
  .pipe(gulp.dest('dist/css/'))
  .pipe(browserSync.reload({stream:true}))
});

gulp.task('sass-prod', function () {
  return gulp.src('src/scss/styles.scss')
  .pipe(sass({
    includePaths: ['scss'],
    onError: browserSync.notify
  }))
  .pipe(prefix(['last 15 versions', '> 1%', 'ie 8', 'ie 7'], { cascade: true }))
  .pipe(cssnano())
  .pipe(gulp.dest('dist/css/'))
  .pipe(browserSync.reload({stream:true}))
});

/**
 * Compile files from js
 */
gulp.task('scripts', function() {
  return gulp.src(['src/js/*.js', 'src/js/custom.js'])
  .pipe(babel({
    presets: ['env']
  }))
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('dist/js/'))
  .pipe(browserSync.reload({stream:true}))
});

gulp.task('scripts-prod', function() {
  return gulp.src(['src/js/*.js', 'src/js/custom.js'])
  .pipe(babel({
    presets: ['env']
  }))
  .pipe(concat('scripts.js'))
  .pipe(uglify())
  .pipe(gulp.dest('dist/js/'))
  .pipe(browserSync.reload({stream:true}))
});

/**
 * Compile files from nunjucks templates
 */
gulp.task('nunjucks', function() {
  return gulp.src('src/pages/**/*.+(njk)')
  .pipe(render({
      path: ['src/templates']
    }))
  .pipe(gulp.dest('dist/'))
  .pipe(browserSync.reload({stream:true}))
});


gulp.task('assets', function () {
  return gulp.src('src/assets/**/*').pipe(gulp.dest('dist/assets/'));
});

/**
 * Watch scss files for changes & recompile
 * Watch js files for changes & concatenate
 * Watch html files, reload BrowserSync
 */
gulp.task('watch', function () {
  gulp.watch(['src/scss/*.scss'], ['sass']);
  gulp.watch(['src/js/*.js'], ['scripts']);
  gulp.watch(['src/pages/**/*.+(njk)', 'src/templates/**/*.+(njk)'], ['nunjucks']);
  gulp.watch(['src/assets/**/*'], ['assets']);
});

/**
 * Default task, running just `gulp` will compile the sass,
 * compile the scripts, launch BrowserSync & watch files.
 */
gulp.task('default', ['browser-sync', 'watch']);
gulp.task('build', ['sass-prod', 'scripts-prod']);

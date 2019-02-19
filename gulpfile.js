var gulp        = require('gulp')
var browserSync = require('browser-sync')
var sass        = require('gulp-sass')
var cssnano     = require('gulp-cssnano')
var prefix      = require('gulp-autoprefixer')

function styles() {
  return gulp.src('scss/styles.scss')
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 3 versions'], { cascade: true }))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.reload({stream:true}))
}

function stylesProd() {
  return gulp.src('scss/styles.scss')
    .pipe(sass({
      includePaths: ['scss'],
      onError: browserSync.notify
    }))
    .pipe(prefix(['last 3 versions'], { cascade: true }))
    .pipe(cssnano())
    .pipe(gulp.dest('./'))
}

function browserSyncServe(done) {
  browserSync.init({
    server: "./",
    port: 5443
  })
  done()
}

function browserSyncReload(done) {
  browserSync.reload();
  done();
}

function watchMarkup() {
  gulp.watch(['index.html'], browserSyncReload);
}

function watchStyles() { 
  gulp.watch(['scss/*.scss'], styles)
}

function watch() {
  gulp.parallel(watchMarkup, watchStyles)
}

var serve = gulp.series(styles, browserSyncServe)
var watch = gulp.parallel(watchMarkup, watchStyles)

gulp.task('default', gulp.parallel(serve, watch))
gulp.task('build', gulp.series(stylesProd))
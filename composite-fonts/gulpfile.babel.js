const gulp = require("gulp");
const browserSync = require("browser-sync");
const sass = require("@selfisekai/gulp-sass");
const postcss = require("gulp-postcss");
const autoprefixer = require("autoprefixer");
const cssnano = require("cssnano");

sass.compiler = require("sass");

const startServer = (done) => {
  browserSync.init({
    server: "./",
    port: 2314,
  });
  done();
};

const browserSyncReload = (done) => {
  browserSync.reload();
  done();
};

const compileStyles = () => {
  const plugins = [autoprefixer(), cssnano()];
  return gulp
    .src("scss/styles.scss")
    .pipe(
      sass({
        includePaths: ["scss"],
        onError: browserSync.notify,
      })
    )
    .pipe(postcss(plugins))
    .pipe(gulp.dest("./"))
    .pipe(browserSync.reload({ stream: true }));
};

const watchMarkup = () => {
  gulp.watch(["index.html"], browserSyncReload);
};

const watchStyles = () => {
  gulp.watch(["scss/*.scss"], compileStyles);
};

// Not exposed to CLI
const serve = gulp.series(compileStyles, startServer);
serve.description = "serve compiled source on local server at port 3000";

const watch = gulp.parallel(watchMarkup, watchStyles);
watch.description = "watch for changes to all source";

const defaultTasks = gulp.parallel(serve, watch);

export { compileStyles, serve, watch, watchMarkup, watchStyles };

export default defaultTasks;

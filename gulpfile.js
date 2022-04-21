const gulp = require('gulp');
const htmlmin = require('gulp-htmlmin');
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const autoprefixer = require('autoprefixer');
const browserSync = require('browser-sync').create();

//htmlmin
gulp.task('htmlmin', () => {
  return gulp
    .src('./dev/index.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('./public'))
})

//css
let cssPlugins = [
  cssnano(),
  autoprefixer()
]

gulp.task('css', () => {
  return gulp
    .src('./dev/styles.css')
    .pipe(postcss(cssPlugins))
    .pipe(gulp.dest('./public'))
})

//gulp watch
gulp.task('watch', () => {
  gulp.watch('./dev/index.html', gulp.series('htmlmin'));
  gulp.watch('./dev/styles.css', gulp.series('css'));
})

//browserSync
gulp.task('server', gulp.series('css', function() {
  browserSync.init({
    server: './public'
  });
  gulp.watch('./dev/styles.css').on('change', browserSync.reload), gulp.series('css');
  gulp.watch('./public/index.html').on('change', browserSync.reload);
}))

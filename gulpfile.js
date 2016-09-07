var gulp        = require('gulp'),
    typescript  = require('typescript'),
    ts          = require('gulp-typescript');

var project = ts.createProject('tsconfig.json', {typescript: typescript});

gulp.task('compile', function () {
  var result = gulp
    .src('src/**/*{ts,tsx}')
    .pipe(ts(project));
  return result.js.pipe(gulp.dest('.tmp'));
});
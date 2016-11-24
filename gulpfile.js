var gulp        = require('gulp'),
    typescript  = require('typescript'),
    ts          = require('gulp-typescript'),
    browserify  = require('browserify'),
    source      = require('vinyl-source-stream'),
    spsave      = require('gulp-spsave');

var project = ts.createProject('tsconfig.json', {typescript: typescript});

gulp.task('compile', function () {
  var result = gulp
    .src('src/**/*{ts,tsx}')
    .pipe(ts(project));
  return result.js.pipe(gulp.dest('js'));
});

gulp.task('bundle', ['compile'], function () {
  var b = browserify('js/bootstrap.js');
  return b.bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('dist'))
  ;
});

gulp.task('copyToSharePoint', ['bundle'], function(){
    return gulp.src("./dist/bundle.js")
        .pipe(spsave({
            siteUrl: "http://sp2013lysov/sites/dev",
            folder: "Style%20Library",
            checkin: true,
            checkinType: 1
        }, {
            username: 'lysov',
            password: 'R@bikon32',
            domain: 'msdep'
        }));
});

gulp.task("watch", function(){
    gulp.watch(["./src/*.*"], ["copyToSharePoint"]);
});
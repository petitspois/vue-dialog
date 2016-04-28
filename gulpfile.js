var _ = gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
_.task('default', () => {
    _.src('./src/*.js').
    pipe(uglify()).
    pipe(rename({
        suffix:'.min'
    })).
    pipe(_.dest('./dist'))
});

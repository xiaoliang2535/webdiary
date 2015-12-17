/**
 * Created by echochi on 15/12/17.
 */

var gulp = require('gulp');
var browserSync = require('browser-sync');

// 监视文件改动并重新载入
gulp.task('serve', [
], function() {
    browserSync({
        server: {
            baseDir: './'
        }
    });
});

gulp.task('default', [
    'serve'
]);

const gulp = require('gulp'),
webpack = require('webpack');

gulp.task('scripts', (callback) => {
  webpack(require('../../webpack.config.js'), () => {
    console.log('webpack completed!');
    callback();
  });
});

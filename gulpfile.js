/* dummy code at the start of learning

gulp.task('default', function () {
  console.log("Hooray - you created a Gulp task.")
});

gulp.task('html', () => {
  console.log('Imagine something useful being done to your HTML here.');
});

*/

require('./gulp/tasks/styles');
require('./gulp/tasks/watch');
require('./gulp/tasks/sprites');
require('./gulp/tasks/scripts');
require('./gulp/tasks/modernizr');
require('./gulp/tasks/build');

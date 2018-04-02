import gulp from 'gulp';
import browserSync from 'browser-sync';

gulp.task ('server', () => {
  return browserSync.init({
    open: 'external',
    files: [
      'build/index.html',
      'build/assets/stylesheets/*.css',
      'build/assets/javascripts/*.js',
    ],
    server: {
      baseDir: './build/',
    },
    port: 5050,
    ui: {
      port: 6060
    }
  });
});

gulp.task('browserSync', ['server']);

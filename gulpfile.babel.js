import gulp from 'gulp';
import requireDir from 'require-dir';

export const directories = {
  app: {
    images: [
      './app/static/images/**/*.png',
      './app/static/images/**/*.jpg',
      './app/static/images/**/*.gif'
    ],
    svg: './app/static/images/svg/*.svg',
    templates: 'app/static/templates/index.pug',
    stylesheets: 'app/static/stylesheets/application.styl',
    javascripts: 'app/src/app.js',
    plugins: 'app/src/plugins/*.js',
  },
  public: {
    stylesheets: './build/assets/stylesheets',
    javascripts: './build/assets/javascripts',
    images: './build/assets/images',
    templates: './build/',
  },
};

requireDir('./gulp_tasks');

gulp.task('default', ['browserSync', 'pug', 'stylus', 'watch', 'images', 'javascripts']);

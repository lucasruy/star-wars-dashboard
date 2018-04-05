# Star Wars Dashboard

## Getting Started

### Requirements

To get started first you should either clone or download the repository.

You should also have node.js and npm installed on your computer.

To download the [node.js](https://nodejs.org/en/) just click on the link, usually npm is installed along with node.js.

### Installing

The first step you must follow to run the project is to install all its dependencies.

The following commands should do this for you.

```
npm install
```

### Gulp.js tasks

List of tasks included in `tasks`.
- `images.js` responsible for copying and optimizing images to the` dist / assets / images` folder.
- `javascripts.js` concatenates all files included in` app / src / ** / *. js`, compiles and generates a mined bundle.
- `pug.js` concatenates all files included in` app / static / templates / ** / *. pug`, compiles and generates final HTML.
- `server.js` starts local server with Browser Sync.
- `stylus.js` compiles` .styl` files to `.css`.
- `watch.js` notes code changes.

## Starting with Gulp.js

In this project `gulp.js` is used to automate routine tasks.

Commands to start your `gulpfile.babel.js`.
- `gulp` to execute the` default` task.
- `gulp images` to optimize images
- `gulp javascripts` to compile` .js` files
- `gulp pug` to compile` .pug` files
- `gulp browserSync` to start the local server
- `gulp stylus` to compile` .styl` files
- `gulp watch` to start observer of code changes

Or you can simply type

```
npm run start
```

* After starting the gulp default task or using `npm run start`, two links will be available to access the project.
- Local: <http://localhost:3000/>
- Externo: <http://your-ip:3000/>

## Run ESLint

This project uses ESLint to catch errors in the Javascript file code.

To run ESLint.

```
npm run lint
```

### Structure of the `app` folder

Below the folder structure.

```sh
├── app
│   ├── src
│   │    ├── components
│   │    ├── utils
│   │    └── app.js
│   └── static
│        ├── images
│        │    └── svg
│        ├── stylesheets
│        │    ├── base
│        │    ├── components
│        │    ├── config
│        │    ├── layout
│        │    │     ├── includes
│        │    │     ├── section
│        │    │     └── views
│        │    └── application.styl
│        └── templates
│               ├── components
│               ├── includes
│               ├── mixins
│               ├── views
│               └── index.pug
```

## Developed with

* [PUG Template Engine] (https://pugjs.org/api/getting-started.html) - Haml-based high-performance template engine.
* [Browser Sync] (https://browsersync.io/) - Synchronized browser test that saves time.
* [Gulp.js] (https://gulpjs.com/) - Automate and enhance your workflow.
* [Babel] (http://babeljs.io/) - The Javascript compiler.
* [ESLint] (https://eslint.org/) - Linter for Javascript code.
* [Stylus] (http://stylus-lang.com/) - CSS exoressuvi, dynamic and robust.
* [Browserify] (http://browserify.org/) - Browserify allows you to require ('modules') in the browser by grouping all its dependencies.

## Development

This project was developed with <3 and Javascript.

## Credits

* [Free Vector icons] (https://www.flaticon.com/) - Repository of free icons where the SVG icons used in the project were found.
* [Google Fonts] (https://fonts.google.com/) - Free font repository where the font used in the project was found.

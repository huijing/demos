# World Cup 2018

Simple display for World Cup 2018 results.

## Local development

1. `git clone git@github.com:huijing/demos/world-cup-2018.git`
2. `npm install`
3. `gulp`

All source files can be found in the `src` folder. The project's build process is handled by [gulp.js](https://gulpjs.com/), which is responsible for the following tasks:

- Running browsersync, which works as a server and handles hot-reloading
- Compiling `.scss` files into `.css`
- Transpiling ES6 with [Babel](https://babeljs.io/)
- Rendering [Nunjucks](https://mozilla.github.io/nunjucks/) templates into `.html`
- Copying assets (images, favicons, font files etc.) from the `assets` folder in `src` to the `dist` folder

Styles are written in `.scss` and can be found in `src/scss`.

Javascript is written using ES6 syntax and can be found in `src/js`.

Nunjucks is the templating engine, and allows for conveniences like conditional logic, loops, variables and includes. Please refer to [official documentation](https://mozilla.github.io/nunjucks/templating.html) for more details.

Once repository is cloned, run `yarn install` or `npm install` (depending on your package manager of choice), to install all required dependencies. After which, run `gulp`, to start the local development server.

*Note: automation workflow is still in the process of being refined. Feel free to raise a GitHub issue with suggestions or bug reports.*

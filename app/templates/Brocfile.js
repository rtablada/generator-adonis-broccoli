'use strict';
const Merge = require('broccoli-merge-trees');
const Sass = require('broccoli-sass-source-maps');
const Autoprefixer = require('broccoli-autoprefixer');
const CssOptimizer = require('broccoli-csso');
const Babel = require('broccoli-babel-transpiler');
const rm = require('broccoli-stew').rm;
const browserify = require('broccoli-watchify');
const envify = require('envify');
// const vueify = require('vueify');

const stylePaths = [
  'resources/styles',
  'node_modules',
];

// Edit this function to add browserify transforms,
// external files, bundles, and more
function browserifyInit(b) {
  b.transform(envify);
  // b.transform(vueify);
}

const appNoSass = rm('resources/javascript', '**/*.scss');

const babelScript = new Babel(appNoSass);

const appScript = browserify(babelScript, {
  browserify: {
    entries: ['./index'],
    debug: true
  },
  cache: false,
  outputFile: 'app.js',

  init: browserifyInit,
});

const compiledSass = new Sass(stylePaths, 'app.scss', 'app.css', {});
const optimizedCSS = new CssOptimizer(compiledSass);
const styles = new Autoprefixer(optimizedCSS);

module.exports = new Merge([styles, appScript]);

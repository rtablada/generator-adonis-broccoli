var util = require('util');
var path = require('path');
var _ = require('lodash');
var utils = require('keystone-utils');
var yeoman = require('yeoman-generator');
var wiring = require('html-wiring');

var ProjectGenerator = module.exports = function ProjectGenerator(args, options, config) {

  // Set utils for use in templates
  this.utils = utils;

  // Apply the Base Generator
  yeoman.generators.Base.apply(this, arguments);

  // Welcome
  console.log('\nLet\'s add Broccoli to this Adonis project!\n');

  // Import Package.json
  this.pkg = JSON.parse(wiring.readFileAsString(path.join(__dirname, '../package.json')));

};

// Extends the Base Generator
util.inherits(ProjectGenerator, yeoman.generators.Base);

ProjectGenerator.prototype.project = function project() {
  var copyDir = [
    'resources/styles',
    'resources/javascript',
    'public/dist',
  ];
  var _this = this;

  this.template('_.sass-lint.yml', '.sass-lint.yml');
  this.copy('Brocfile.js', 'Brocfile.js');
  this.copy('_.eslintrc', '.eslintrc');
  this.copy('_.gitignore', '.gitignore');
  this.copy('_.gitignore-public', 'public/dist/.gitignore');
  this.copy('resources/views/master.njk', 'resources/views/master.njk');

  copyDir.forEach(function(file) {
    _this.bulkDirectory(file, file);
  });

  // This callback is fired when the generator has completed,
  // and includes instructions on what to do next.
  var done = _.bind(function done() {
    console.log(
    `------------------------------------------------

    To your scripts in "package.json" add:

    "assets:build": "ember build -o public/dist",
    "assets:watch": "ember build -w -o public/dist",

    Your project is ready to go!

    To build your assets run "npm run assets:build"`);
  }, this);

  var deps = [
    'font-awesome',
    'normalize-css',
    'whatwg-fetch',
    'yoga-sass',
    'broccoli',
    'broccoli-autoprefixer',
    'broccoli-babel-transpiler',
    'broccoli-csso',
    'broccoli-cli',
    'broccoli-funnel',
    'broccoli-inject-livereload',
    'broccoli-merge-trees',
    'broccoli-sass-source-maps',
    'broccoli-sourcemap-concat',
    'broccoli-stew',
    'ember-cli',
    'eslint',
    'eslint-config-rtablada',
    'loader.js',
    'sass-lint',
  ];

  this.npmInstall(deps, {
    saveDev: true,
    skipMessage: true,
    callback: done,
  });
};
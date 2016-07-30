# Adonis Broccoli Generator

This Yeoman generator will create add simple Broccoli asset compiliation for web development with SASS, ES6 modules (using Babel transpiling) to any Adonis project.
It also will also install [Yoga Sass](http://rtablada.github.io/yoga-sass), [Font Awesome](http://fontawesome.io), and [Normalize CSS](https://necolas.github.io/normalize.css/).

## Installing the Generator

```bash
npm install -g broccoli-cli yo generator-adonis-broccoli
```

## Creating Projects

To create a project with this generator run:

```bash
yo adonis-broccoli
```

This will ask you for your project name, and a few details to get up and started.

## Running the Development Server

Once the project has been created, move into the directory and then run:

```bash
npm run serve
```

The `Brocfile.js` injects live reload into HTML files in the `public` directory.
This command is backed by `ember-cli` which will fire a reload whenever Broccoli rebuilds any trees.

## Building the Project

To build the project into a final production build, run:

```bash
npm run build
```

This will build the project into a `dist` directory that can be uploaded to services such as Firebase, Surge, or AWS.

## Lining SASS

This project comes with [SASS Lint](https://github.com/sasstools/sass-lint) support.

To run SASS lint, run the command:

```bash
npm run lint
```

The rules installed beyond the [SASS Lint](https://github.com/sasstools/sass-lint/blob/master/lib/config/sass-lint.yml) defaults:

* Class Name Format: BEM
* No IDs
* No Important
* Hex Notation: Lowercase
* Indentation: 2 Spaces
* Property Sort Order: SMACSS
  - Box
  - Border
  - Background
  - Text
  - Other

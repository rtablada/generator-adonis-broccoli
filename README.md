# Adonis Broccoli Generator

This Yeoman generator will create add simple Broccoli asset compiliation for web development with SASS, ES6 modules (using Babel transpiling) to any Adonis project.
It also will also install [Yoga Sass](http://rtablada.github.io/yoga-sass), [Font Awesome](http://fontawesome.io), and [Normalize CSS](https://necolas.github.io/normalize.css/).

## Installing the Generator

```bash
npm install -g yo generator-adonis-broccoli ember-cli yarn
```

## Creating Projects

To add asset compiliation to your project:

```bash
yo adonis-broccoli
```

The script will ask to overwrite your `master.njk` view and your `.gitignore`.
On a new project, you should make these changes for quick and easy setup.

On existing projects:

Add `/tmp` to your project's `.gitignore` file to ignore the cache folder that broccoli uses.

Change your CSS to point to `/dist/app.css` to use the CSS created by SASS.

## Adding NPM Scripts

To your `package.json` file add the following `scripts`:

* `"assets:build": "ember build -o public/dist"`
* `"assets:watch": "ember build -w -o public/dist"`

## Building Assets

Now that you have your project setup, to watch your assets in development mode run:

```
npm run assets:watch
```

In CI and Production, the assets can be built once without watching files:

```
npm run assets:build
```

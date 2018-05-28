generator-webpack
=================

  > A yeoman generator for my usual webpack stacks (vanilla, vue or angular)
  > including support for TypeScript, Stylus, Pug, Docker and more.

***UNDER DEVELOPMENT – NOT YET RELEASED***

[![npm package version](https://img.shields.io/npm/v/@simbo/generator-webpack.svg?style=flat-square)](https://www.npmjs.com/package/@simbo/generator-webpack)
[![Travis CI build status](https://travis-ci.org/simbo/generator-webpack.svg?branch=master)](https://travis-ci.org/simbo/generator-webpack/builds)

---

<!-- TOC depthTo:3 -->

- [About](#about)
  - [Common Features](#common-features)
  - [Sub Generators](#sub-generators)
  - [Preview of generated Files](#preview-of-generated-files)
- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
  - [Advanced CLI Usage](#advanced-cli-usage)
- [Development](#development)
- [License](#license)

<!-- /TOC -->

---

## About

This generator creates a boilerplate for [webpack](https://webpack.js.org/)
based frontend projects. It offers multiple kinds of setups:

  - **Vanilla** (no framework)

  - **Vue.js**

  - **Angular**

Although each of them has slightly different settings for their respective
purpose, they all share the same common features and base configuration.


### Common Features

  - [Typescript](https://www.typescriptlang.org/) support with
    [Babel](https://babeljs.io/) transpiling

  - [Stylus](http://stylus-lang.com/) support

  - [PostCSS](https://postcss.org/) support with plugins:
      - [Autoprefixer](https://github.com/postcss/autoprefixer)
      - [CSS MQ Packer](https://github.com/hail2u/node-css-mqpacker)
      - [cssnano](http://cssnano.co/)

  - [Pug](https://pugjs.org/api/getting-started.html) support with `:markdown`
    filter using [Marked](https://marked.js.org/)

  - full sourcemaps support for all loaders in development and production mode,
    optimized respectively

  - [Webpack Dev Server](https://webpack.js.org/configuration/dev-server/)
    supporting
    [Hot Module Replacement](https://webpack.js.org/concepts/hot-module-replacement/)

  - [Bundle Analyzer](https://www.npmjs.com/package/webpack-bundle-analyzer) service

  - optional Docker-wrapped development environment with self-documented
    Makefile as task runner


### Sub Generators

Beside internal sub generators, `@simbo/generator-webpack` is combined with

  - [generator-license](https://github.com/jozefizso/generator-license)
  - [@simbo/generator-editorconfig](https://github.com/simbo/generator-editorconfig)
  - [@simbo/generator-prettierrc](https://github.com/simbo/generator-prettierrc)
  - [@simbo/generator-readme](https://github.com/simbo/generator-readme)


### Preview of generated Files

There are auto-generated branches from the latest master build, showing the
expected results for each setup and also a `README.md` with usage details:

  - [Preview of generated *Vanilla* project]()

  - [Preview of generated *Vue.js* project]()

  - [Preview of generated *Angular* project]()

The generated file/folder structure will look somehow like this:

``` text
./
├─ src/
│  ├─ public/
│  ├─ scripts/
│  │  ├─ modules/
│  │  └─ main.ts
│  ├─ styles/
│  │  ├─ imports/
│  │  └─ main.styl
│  └─ index.pug
├─ .editorconfig
├─ .gitignore
├─ .prettierrc
├─ LICENSE
├─ Makefile
├─ package.json
├─ README.md
├─ tsconfig.json
└─ webpack.config.js
```


## Requirements

This is a yeoman generator. You should have installed
[yeoman](http://yeoman.io/).


## Installation

`@simbo/generator-webpack` is a public user-scoped npm package.

You can install it using…

``` sh
# …npm
npm install -g @simbo/generator-webpack

# …or yarn
yarn global add @simbo/generator-webpack
```


## Usage

Use it like any other yeoman generator within your project root:

``` sh
yo @simbo/webpack
```


### Advanced CLI Usage

``` sh
yo @simbo/webpack [<framework>] [OPTIONS]
```

All parameters are optional.

Possible values for `<framework>` are:

  - `vanilla` (default)
  - `vue`
  - `angular`

See also `yo @simbo/webpack --help` for detailed usage information.


## Development

Link from project root to use it like a globally installed package on your
machine.

``` sh
# link using npm
npm link

# or link using yarn
yarn link
```


## License

[MIT @ 2018 Simon Lepel](http://simbo.mit-license.org/)

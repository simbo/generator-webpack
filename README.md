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

All arguments and parameters are optional.

See also `yo @simbo/webpack --help` for auto-generated usage information.

Possible values for `<framework>` argument:

  - `vanilla` (default)
  - `vue`
  - `angular`


#### Options

  - `--quiet` | `-q`  
    reduce prompts to minimum / use default values where possible

  - `--author <VALUE>` | `-a <VALUE>`  
    Set value for author name

  - `--email <VALUE>` | `-e <VALUE>`  
    Set value for author email

  - `--github <VALUE>` | `-g <VALUE>`  
    Set value for github username

  - `--name <VALUE>` | `-n <VALUE>`  
    Set value for project name

  - `--description <VALUE>` | `-d <VALUE>`  
    Set value for project description

  - `--project-version <VALUE>` | `-v <VALUE>`  
    Set value for project version

  - `--no-docker`  
    Disable docker support (enabled by default)

  - `--no-makefile`  
    Disable make as task runner (enabled by default; requires docker support)

  - `--no-prettier`  
    Disable prettier.js support (enabled by default)

  - `--no-editorconfig`  
    Disable prettier.js support (enabled by editorconfig)

  - `--npm`  
    Enable npm install (disabled by default; disables yarn install)


## Development

Link from project root to use it like a globally installed package on your
machine.

``` sh
# link using npm
npm link
# or link using yarn
yarn link

# then elsewhere
yo @simbo/webpack
```


## License

[MIT &copy; Simon Lepel](http://simbo.mit-license.org/)

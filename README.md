generator-webpack
=================

  > A yeoman generator for my usual webpack stacks.

[![npm package version](https://img.shields.io/npm/v/@simbo/generator-webpack.svg?style=flat-square)](https://www.npmjs.com/package/@simbo/generator-webpack)
[![Travis CI build status](https://travis-ci.org/simbo/generator-webpack.svg?branch=master)](https://travis-ci.org/simbo/generator-webpack/builds)

---

<!-- TOC -->

- [Requirements](#requirements)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [License](#license)

<!-- /TOC -->

---


## Requirements

This is a yeoman generator. You should have installed
[yeoman](http://yeoman.io/).


## Installation

`generator-webpack` is a scoped npm package. You can install it…

``` sh
# …using npm
npm install -g @simbo/generator-webpack
# …or yarn
yarn global add @simbo/generator-webpack
```


## Usage

Use it like any other yeoman generator in your project root:

``` sh
yo @simbo/webpack
```

Params:

  - `-q` | `--quiet` | `-d` | `--defaults`  
    reduce prompts to minimum / use default values where possible


## Development

Link the project root to use it like a global npm package on your machine.

``` sh
# using npm
npm link
# or yarn
yarn link

# then elsewhere
yo @simbo/webpack

# or with forced overwriting of existing files
yo @simbo/webpack --force
```


## License

[MIT &copy; Simon Lepel](http://simbo.mit-license.org/)

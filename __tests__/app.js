const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

const testApp = () => helpers.run(require.resolve('../generators/app'));

const files = [
  '.editorconfig',
  '.gitignore',
  '.prettierrc',
  'LICENSE',
  'package.json',
  'README.md',
  'tsconfig.json',
  'webpack.config.js'
];

jest.setTimeout(10000);

describe('generator-webpack:app', () => {
  it('creates files', () =>
    testApp()
      .withPrompts({})
      .then(() => {
        assert.file(files);
      }));

  describe('with option `generateInto`', () => {
    it('creates files in desired path', () =>
      testApp()
        .withOptions({
          generateInto: 'subfolder'
        })
        .withPrompts({})
        .then(() => {
          // generator-license does not support generateInto
          assert.file(files.filter(file => file !== 'LICENSE').map(file => `subfolder/${file}`));
        }));
  });
});

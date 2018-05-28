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
          assert.file(files.map(file => `subfolder/${file}`));
        }));
  });
});

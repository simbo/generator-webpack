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

const prompts = {
  authorName: 'foo',
  authorEmail: 'foo@bar.com',
  authorWebsite: 'http://foo.codes/',
  githubAccount: 'foo',
  projectName: 'foo-bar',
  projectDescription: 'Foo bar!',
  projectVersion: '1.0.0',
  frameworkValue: 'vanilla'
};

describe('generator-webpack:app', () => {
  beforeAll(() => {
    jest.setTimeout(10000);
    jest.mock('github-username', () => async () => 'ghuser');
  });

  it('creates files', () => testApp()
    .withPrompts(prompts)
    .then(() => {
      assert.file(files);
    }));

  describe('with option `generateInto`', () => {
    it('creates files in desired path', () => testApp()
      .withOptions({
        generateInto: 'subfolder'
      })
      .withPrompts(prompts)
      .then(() => {
        assert.file(files.map(file => `subfolder/${file}`));
      }));
  });
});

const Generator = require('yeoman-generator');
const githubUsername = require('github-username');
const mergeOptions = require('merge-options');
const rc = require('rc');
const parseAuthor = require('parse-author');
const path = require('path');

const dependencies = require('./dependencies');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.argument('framework', {
      type: String,
      required: false,
      desc: `Framework: 'vanilla', 'vue' or 'angular'`
    });

    this.option('generateInto', {
      type: String,
      required: false,
      defaults: '',
      desc: 'Relocate the location of the generated files.'
    });

    this.option('authorName', {
      type: String,
      required: false,
      desc: 'Author’s name'
    });

    this.option('authorEmail', {
      type: String,
      required: false,
      desc: 'Author’s email'
    });

    this.option('authorWebsite', {
      type: String,
      required: false,
      desc: 'Author’s website'
    });

    this.option('githubAccount', {
      type: String,
      required: false,
      desc: 'GitHub user or organization'
    });

    this.option('projectName', {
      type: String,
      required: false,
      desc: 'Project name'
    });

    this.option('projectDescription', {
      type: String,
      required: false,
      desc: 'Project description'
    });

    this.option('projectVersion', {
      type: String,
      required: false,
      desc: 'Project version'
    });

    this.option('projectRepository', {
      type: String,
      required: false,
      desc: 'Project repository'
    });

    this.option('projectWebsite', {
      type: String,
      required: false,
      desc: 'Project website'
    });

    this.option('projectIssues', {
      type: String,
      required: false,
      desc: 'Project issue tracker'
    });

    this.option('license', {
      type: String,
      required: false,
      desc: 'License'
    });

    this.option('licenseYear', {
      type: String,
      required: false,
      desc: 'License year'
    });

    this.option('npm', {
      type: Boolean,
      required: false,
      defaults: false,
      desc: 'Use npm instead of yarn'
    });
  }

  async initializing() {
    this.npmrc = rc('npm');
    this.pkg = this.fs.readJSON(this.destinationPath('package.json'), {});
    this.pkgAuthor =
      this.pkg.author === 'string' ? parseAuthor(this.pkg.author) : this.pkg.author || {};

    this.props = {
      authorName: this.options.authorName,
      authorEmail: this.options.authorEmail,
      authorWebsite: this.options.authorWebsite,
      githubAccount: this.options.githubAccount,
      projectName: this.options.projectName,
      projectDescription: this.options.projectDescription,
      projectVersion: this.options.projectVersion,
      projectRepository: this.options.projectRepository,
      projectWebsite: this.options.projectWebsite,
      projectIssues: this.options.projectIssues,
      license: this.options.license || 'MIT',
      licenseYear: this.options.licenseYear || new Date().getFullYear()
    };
  }

  async prompting() {
    const prompts = [
      {
        name: 'authorName',
        message: 'Author’s name',
        when: () => !this.props.authorName,
        default: () => this.pkgAuthor.name || this.npmrc['init.author.name'] || this.user.git.name()
      },

      {
        name: 'authorEmail',
        message: 'Author’s email',
        when: () => !this.props.authorEmail,
        default: () =>
          this.pkgAuthor.email || this.npmrc['init.author.email'] || this.user.git.email()
      },

      {
        name: 'authorWebsite',
        message: 'Author’s website',
        when: () => !this.props.authorWebsite,
        default: () => this.pkgAuthor.url || this.npmrc['init.author.url']
      },

      {
        name: 'githubAccount',
        message: 'GitHub account',
        when: () => !this.props.githubAccount,
        default: async () => await githubUsername(this.props.authorEmail)
      },

      {
        name: 'projectName',
        message: 'Project name',
        when: () => !this.props.projectName,
        default: () => this.pkg.name || this.options.env.cwd.split(path.sep).pop()
      },

      {
        name: 'projectDescription',
        message: 'Project description',
        when: () => !this.props.projectDescription,
        default: () => this.pkg.description || 'This project is awesome!'
      },

      {
        name: 'projectVersion',
        message: 'Project version',
        when: () => !this.props.projectVersion,
        default: () => this.pkg.version || '0.1.0'
      },

      {
        name: 'frameworkValue',
        message: 'Choose your stack',
        type: 'list',
        choices: [
          {
            name: 'Vanilla (no framework)',
            value: 'vanilla'
          },
          {
            name: 'Vue.js',
            value: 'vue'
          },
          {
            name: 'Angular',
            value: 'angular'
          }
        ],
        when: () => !this.options.framework,
        default: () => 'vanilla'
      }
    ];

    for (let prompt of prompts) {
      this.props = mergeOptions(this.props, await this.prompt(prompt));
    }
  }

  async configuring() {
    this.props.framework = {
      vue: this.props.frameworkValue === 'vue',
      angular: this.props.frameworkValue === 'angular'
    };

    this.props.projectRepository =
      this.props.projectRepository ||
      `git://github.com/${this.props.githubAccount}/${this.props.projectName}.git`;

    this.props.projectWebsite =
      this.props.projectWebsite ||
      `https://github.com/${this.props.githubAccount}/${this.props.projectName}#readme`;

    this.props.projectIssues =
      this.props.projectIssues ||
      `https://github.com/${this.props.githubAccount}/${this.props.projectName}/issues`;

    this.props.features = {
      npm: this.options.npm
    };
  }

  async composing() {
    this.composeWith(require.resolve('@simbo/generator-editorconfig/generators/app'), {
      generateInto: this.options.generateInto
    });

    this.composeWith(require.resolve('@simbo/generator-prettierrc/generators/app'), {
      generateInto: this.options.generateInto
    });

    this.composeWith(require.resolve('@simbo/generator-tsconfig/generators/app'), {
      generateInto: this.options.generateInto,
      config: {}
    });

    this.composeWith(require.resolve('@simbo/generator-readme/generators/app'), {
      generateInto: this.options.generateInto,
      projectName: this.props.projectName,
      projectDescription: this.props.projectDescription,
      authorName: this.props.authorName,
      license: this.props.license,
      licenseYear: this.props.licenseYear
    });

    this.composeWith(require.resolve('generator-license'), {
      name: this.props.authorName,
      email: this.props.authorEmail,
      website: this.props.authorWebsite,
      license: this.props.license,
      licenseYear: this.props.licenseYear
    });
  }

  async writing() {
    const files = ['.gitignore'];
    for (let file of files) {
      this.fs.copy(this.templatePath(file), this.destinationPath(this.options.generateInto, file));
    }

    const templates = ['package.json', 'webpack.config.js'];
    for (let template of templates) {
      this.fs.copyTpl(
        this.templatePath(`${template}.ejs`),
        this.destinationPath(this.options.generateInto, template),
        this.props
      );
    }

    this.fs.extendJSON(
      this.destinationPath(this.options.generateInto, 'package.json'),
      mergeOptions(dependencies.common, dependencies[this.props.frameworkValue])
    );
  }

  async install() {}

  async end() {}
};

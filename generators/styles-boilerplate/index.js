const Generator = require('yeoman-generator');
const path = require('path');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('generateInto', {
      type: String,
      required: false,
      defaults: '',
      desc: 'Relocate the location of the generated files.'
    });

    this.option('subfolder', {
      type: String,
      required: false,
      defaults: 'src',
      desc: 'Subfolder path for sources'
    })
  }

  writing() {
    const files = [
      ['imports', 'modules', 'typo.styl'],
      ['imports', 'global-vars.styl'],
      ['main.styl']
    ];

    const basePath = path.join(this.options.generateInto, this.options.subfolder);

    for (let file of files) {
      this.fs.copy(this.templatePath(...file), this.destinationPath(basePath, 'styles', ...file));
    }

    this.fs.extendJSON(this.destinationPath(this.options.generateInto, 'package.json'), {
      dependencies: {
        'css-reset-and-normalize': '^1.0.1'
      }
    });
  }
};

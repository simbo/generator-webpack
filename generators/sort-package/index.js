const Generator = require('yeoman-generator');
const sortObject = require('sort-object');

module.exports = class extends Generator {
  constructor(args, opts) {
    super(args, opts);

    this.option('generateInto', {
      type: String,
      required: false,
      defaults: '',
      desc: 'Relocate the location of the generated files.'
    });
  }

  writing() {
    const pkgPath = this.destinationPath(this.options.generateInto, 'package.json');
    if (!this.fs.exists(pkgPath)) {
      return;
    }
    const pkg = this.fs.readJSON(pkgPath, {});
    const sortProps = ['scripts', 'dependencies', 'devDependencies'];
    for (let prop of sortProps) {
      if (typeof pkg[prop] === 'object') pkg[prop] = sortObject(pkg[prop]);
    }
    this.fs.writeJSON(pkgPath, pkg);
  }
};

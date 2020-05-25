import {join} from 'path'
import {sync as pkgDirsync} from 'pkg-dir'

class PackageJson {
  public path: string

  public name: string

  public version: string

  constructor() {
    this.path =
      pkgDirsync(join(__dirname, '..', '..')) ||
      process.env.INIT_CWD ||
      process.cwd()
    this.name = require(join(this.path, 'package.json')).name
    this.version = require(join(this.path, 'package.json')).version
  }
}

module.exports = PackageJson

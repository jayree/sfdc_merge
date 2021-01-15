import {join} from 'path'

class PackageJson {
  public path: string

  public name: string

  public version: string

  constructor() {
    this.path = process.cwd()
    this.name = require(join(this.path, 'package.json')).name
    this.version = require(join(this.path, 'package.json')).version
  }
}

module.exports = PackageJson

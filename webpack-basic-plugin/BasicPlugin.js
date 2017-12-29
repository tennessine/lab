class BasicPlugin {
  constructor(options) {
    // console.log(options)
  }
  apply(compiler) {
    compiler.plugin('compilation', function(compilation) {
      // console.log(compilation)
    })
  }
}

module.exports = BasicPlugin
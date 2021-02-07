Calculator = function() {
  this.total = 0
}

Calculator.prototype.calculate = function(gems, hunters) {

  if (gems.length < hunters) {
    return 'Cannot be split equally.'
  }
  if (hunters === 1) {
    return 'Split successful.'
  }
  gems.forEach(gem => {
    this.total += gem
  })

}

module.exports = Calculator
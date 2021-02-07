Calculator = function() {}

Calculator.prototype.calculate = function(gems, hunters) {
  if (gems.length < hunters) {
    return 'Cannot be split equally.'
  }
  if (hunters = 1) {
    return 'Split successful.'
  }
}

module.exports = Calculator
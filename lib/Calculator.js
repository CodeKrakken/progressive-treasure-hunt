Calculator = function() {}

Calculator.prototype.calculate = function(gems, hunters) {
  if (gems.length < hunters) {
    return 'Cannot be split equally.'
  }
}

module.exports = Calculator
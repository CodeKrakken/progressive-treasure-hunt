Calculator = function() {
  this.total = 0
  this.gems
}

Calculator.prototype.calculate = function(gems, hunters) {
  if (hunters === 1) { return 'Split successful.' }
  this.getTotal(gems)
  if (!this.overview(gems, hunters)) { return 'Cannot be split equally.' }
  this.gems = gems.sort((a, b) => b - a)
}

Calculator.prototype.getTotal = function(gems) {
  gems.forEach(gem => { this.total += gem })
}

Calculator.prototype.overview = function(gems, hunters) {
  return (gems.length > hunters && !this.outsize(gems, hunters))
}

Calculator.prototype.outsize = function(gems, hunters) {
  let response
  gems.forEach(gem => { 
    if (gem > this.total / hunters) { response = true }
  })
  return response
}

module.exports = Calculator
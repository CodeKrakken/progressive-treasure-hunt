Calculator = function() {
  this.total = 0
}

Calculator.prototype.calculate = function(gems, hunters) {
  this.getTotal(gems)
  return this.split(gems, hunters)
}

Calculator.prototype.getTotal = function(gems) {
  gems.forEach(gem => { this.total += gem })
}

Calculator.prototype.split = function(gems, hunters) {
  if (gems.length < hunters) { return 'Cannot be split equally.' }
  if (hunters === 1) { return 'Split successful.' }
  if (this.outsize(gems, hunters)) { return 'Cannot be split equally.' }
}

Calculator.prototype.outsize = function(gems, hunters) {
  gems.forEach(gem => { 
    console.log(gem > this.total / hunters)
    if (gem > this.total / hunters) { response = true }
  })
    return response
}

module.exports = Calculator
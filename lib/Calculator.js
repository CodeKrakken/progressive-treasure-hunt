Calculator = function() {
  this.total = 0
  this.gems
  this.fairShare
  this.shares = []
}

Calculator.prototype.calculate = function(gems, hunters) {
  if (hunters === 1) { return 'Split successful.' }
  this.getTotal(gems)
  this.fairShare = this.total / hunters
  this.gems = gems.sort((a, b) => b - a)
  if (!this.overview(gems, hunters)) { return 'Cannot be split equally.' }
  
}

Calculator.prototype.getTotal = function(gems) {
  gems.forEach(gem => { this.total += gem })
}

Calculator.prototype.overview = function(gems, hunters) {
  return (gems.length > hunters && gems[0] < this.fairShare)
}

module.exports = Calculator
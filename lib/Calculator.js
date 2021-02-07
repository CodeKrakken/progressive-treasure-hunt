Calculator = function() {
  this.total = 0
  this.gems
  this.fairShare
  this.shares = []
}

Calculator.prototype.calculate = function(gems, hunters) {
  this.getValues(gems, hunters)
  if (hunters === 1) { return 'Split successful.' }
  if (!this.overview()) { return 'Cannot be split equally.' }
  return this.split()
}

Calculator.prototype.getValues = function(gems, hunters) {
  this.gems = gems.sort((a, b) => b - a)
  this.getTotal(gems)
  this.fairShare = this.total / hunters
}

Calculator.prototype.getTotal = function(gems) {
  gems.forEach(gem => { this.total += gem })
}

Calculator.prototype.overview = function() {
  return (this.gems.length > this.hunters && this.gems[0] < this.fairShare)
}

Calculator.prototype.split = function() {
  let currentShare = []
  this.gems.forEach(gem => {
    if (currentShare.reduce((a, b) => a + b, 0) < this.fairShare) {
      gemIndex = this.gems.indexOf(gem)
      currentShare.push(gem)
      this.gems.splice(gemIndex, 1)
      console.log(this.gems)
    }
  })
}
module.exports = Calculator
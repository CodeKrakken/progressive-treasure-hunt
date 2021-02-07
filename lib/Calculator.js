Calculator = function() {
  this.total = 0
  this.gems
  this.fairShare
  this.shares = []
}

Calculator.prototype.calculate = function(gems, hunters) {
  this.getValues(gems, hunters)
  if (hunters === 1) { return 'Split successful.' }
  if (!this.overview()) { 
    return 'Cannot be split equally.' }
  return this.split()
}

Calculator.prototype.getValues = function(gems, hunters) {
  this.gems = gems.sort((a, b) => a - b)
  this.hunters = hunters
  this.getTotal(gems)
  this.fairShare = this.total / hunters
}

Calculator.prototype.getTotal = function(gems) {
  gems.forEach(gem => { this.total += gem })
}

Calculator.prototype.overview = function() {
  return (this.gems.length > this.hunters && this.gems[this.gems.length-1] <= this.fairShare)
}

Calculator.prototype.split = function() {
  let currentShare = []
  this.gems.forEach(gem => {

    if (this.totalOf(currentShare) < this.fairShare) {
      gemIndex = this.gems.indexOf(gem)
      currentShare.push(gem)
      this.gems.splice(gemIndex, 1)
    } else if (this.totalOf(currentShare) === this.fairShare) {
      this.shares.push[currentShare]
    }
  })
}

Calculator.prototype.totalOf = function(array) {
  return array.reduce((a, b) => a + b, 0) 
} 

module.exports = Calculator
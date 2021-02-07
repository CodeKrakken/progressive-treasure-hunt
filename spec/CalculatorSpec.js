'use strict'

const Calculator = require('../lib/Calculator')
let calculator
describe('calculator', function() {
  beforeEach(function() {
    calculator = new Calculator
  })

  it('responds to calculate function', function() {
    expect(calculator.calculate).toBeDefined()
  })
})
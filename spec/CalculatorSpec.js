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

  it('cannot split 1 gem between 2 hunter, regardless of value', function() {
    expect(calculator.calculate([10], 2)).toEqual('Cannot be split equally.')
  })
})
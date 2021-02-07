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

  it('will apportion one gem to one hunter', function() {
    expect(calculator.calculate([10], 1)).toEqual('Split successful.')
  })

  it('can calculate the total of the gem array', function() {
    calculator.calculate([4,4,4], 3)
    expect(calculator.total).toEqual(12)
  })
})
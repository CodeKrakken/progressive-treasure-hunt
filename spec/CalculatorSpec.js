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

  it('cannot split 1 gem between 2 hunters, regardless of value', function() {
    expect(calculator.calculate([10], 2)).toEqual('Cannot be split equally.')
  })

  it('will apportion one gem to one hunter', function() {
    expect(calculator.calculate([10], 1)).toEqual('Split successful.')
  })

  it('can calculate the total of the gem array', function() {
    calculator.calculate([4,4,4], 3)
    expect(calculator.total).toEqual(12)
  })

  it('can identify an oversized gem that prevents fair division', function() {
    expect(calculator.calculate([12,3,4], 3)).toEqual('Cannot be split equally.')
  })

  it('can sort and reverse an array of gems', function() {
    calculator.calculate([3, 6, 4, 12, 34, 9], 2)
    expect(calculator.gems).toEqual([34, 12, 9, 6, 4, 3])
  })

  it('can calculate a fair share', function() {
    calculator.calculate([4, 2, 2, 4], 3)
    expect(calculator.fairShare).toEqual(4)
  })

  // it('can fulfil examples from spec', function() {
  //   expect(calculator.calculate([4,4,4], 3)).toEqual('Split successful.')
  //   expect(calculator.calculate([27,7,20], 2)).toEqual('Split successful.')
  //   expect(calculator.calculate([6,3,2,4,1], 2)).toEqual('Split successful.')
  //   expect(calculator.calculate([3,2,7,7,14,5,3,4,9,2], 4)).toEqual('Split successful.')
  // })
})
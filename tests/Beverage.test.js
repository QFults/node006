const Beverage = require('../lib/Beverage.js')

test('New beverage should be instance of constructor', () => {
  const beverage = new Beverage('fruit punch', 20, 3, 12, 'fruit')
  expect(beverage).toBeInstanceOf(Beverage)
})

test('getFluidOZ() should return fluid oz', () => {
  const beverage = new Beverage('coffee', 100, 2, 8, 'coffee')
  expect(beverage.getFluidOZ()).toBe(8)
})

const Product = require('../lib/Product.js')

test('New product should be instance of constructor', () => {
  const product = new Product('napkins', 100, 0.32)
  expect(product).toBeInstanceOf(Product)
})

test('getName() should return product name', () => {
  const product = new Product('cups', 200, 0.56)
  expect(product.getName()).toBe('cups')
})

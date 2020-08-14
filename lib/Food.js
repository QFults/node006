const Product = require('./Product.js')

class Food extends Product {
  constructor (name, quantity, price, expirationDate, foodGroup) {
    super(name, quantity, price)
    this.expirationDate = expirationDate
    this.foodGroup = foodGroup
  }
  getExpirationDate () {
    return this.expirationDate
  }
  getFoodGroup () {
    return this.foodGroup
  }
  getType () {
    return 'food'
  }
}

module.exports = Food

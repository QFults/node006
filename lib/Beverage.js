const Product = require('./Product.js')

class Beverage extends Product {
  constructor (name, quantity, price, fluidOZ, mainFlavor) {
    super(name, quantity, price)
    this.fluidOZ = fluidOZ
    this.mainFlavor = mainFlavor
  }
  getFluidOZ () {
    return this.fluidOZ
  }
  getMainFlavor () {
    return this.mainFlavor
  }
  getType () {
    return 'beverage'
  }
}

module.exports = Beverage

const { prompt } = require('inquirer')

const Product = require('./lib/Product.js')
const Food = require('./lib/Food.js')
const Beverage = require('./lib/Beverage.js')

let products = []

const buildFood = product => {
  prompt([
    {
      type: 'input',
      name: 'expirationDate',
      message: 'Enter the product expiration date:'
    },
    {
      type: 'input',
      name: 'foodGroup',
      message: 'Enter the product food group:'
    }
  ])
    .then(({ expirationDate, foodGroup }) => {
      products.push(new Food(product.name, product.quantity, product.price, expirationDate, foodGroup))
      subMenu()
    })
    .catch(err => console.log(err))
}

const buildBeverage = product => {
  prompt([
    {
      type: 'number',
      name: 'fluidOZ',
      message: 'Enter product fluid oz:'
    },
    {
      type: 'input',
      name: 'mainFlavor',
      message: 'Enter product main flavor:'
    }
  ])
    .then(({ fluidOZ, mainFlavor }) => {
      products.push(new Beverage(product.name, product.quantity, product.price, fluidOZ, mainFlavor))
      subMenu()
    })
    .catch(err => console.log(err))
}

const subMenu = () => {
  prompt({
    type: 'list',
    name: 'action',
    choices: ['Make Another Product', 'Finish'],
    message: 'What would you like to do now?'
  })
    .then(({ action }) => {
      switch (action) {
        case 'Make Another Product':
          mainMenu()
          break
        case 'Finish':
          console.log(products)
          break
      }
    })
    .catch(err => console.log(err))
}

const mainMenu = () => {
  prompt([
    {
      type: 'list',
      name: 'type',
      choices: ['General Product', 'Food', 'Beverage'],
      message: 'Select the type of item you want to make:'
    },
    {
      type: 'input',
      name: 'name',
      message: 'Enter the product name:'
    },
    {
      type: 'number',
      name: 'quantity',
      message: 'Enter quantity of product:'
    },
    {
      type: 'number',
      name: 'price',
      message: 'Enter product price:'
    }
  ])
    .then(product => {
      switch (product.type) {
        case 'General Product':
          products.push(new Product(product.name, product.quantity, product.price))
          subMenu()
          break
        case 'Food':
          buildFood(product)
          break
        case 'Beverage':
          buildBeverage(product)
          break
      }
    })
    .catch(err => console.log(err))
}

mainMenu()

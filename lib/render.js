const fs = require('fs')
const path = require('path')

const render = products => {
  let html = []
  products.forEach(product => {
    if (product.getType() === 'product') {
      let template = fs.readFileSync(path.join(__dirname, '..', 'templates', 'product.html'), 'utf8')
      template = template.replace('{{ name }}', product.getName())
      template = template.replace('{{ quantity }}', product.getQuantity())
      template = template.replace('{{ price }}', product.getPrice())
      html.push(template)
    } else if (product.getType() === 'food') {
      let template = fs.readFileSync(path.join(__dirname, '..', 'templates', 'food.html'), 'utf8')
      template = template.replace('{{ name }}', product.getName())
      template = template.replace('{{ quantity }}', product.getQuantity())
      template = template.replace('{{ price }}', product.getPrice())
      template = template.replace('{{ expirationDate }}', product.getExpirationDate())
      template = template.replace('{{ foodGroup }}', product.getFoodGroup())
      html.push(template)
    } else {
      let template = fs.readFileSync(path.join(__dirname, '..', 'templates', 'beverage.html'), 'utf8')
      template = template.replace('{{ name }}', product.getName())
      template = template.replace('{{ quantity }}', product.getQuantity())
      template = template.replace('{{ price }}', product.getPrice())
      template = template.replace('{{ fluidOZ }}', product.getFluidOZ())
      template = template.replace('{{ mainFlavor }}', product.getMainFlavor())
      html.push(template)
    }
  })

  let template = fs.readFileSync(path.join(__dirname, '..', 'templates', 'main.html'), 'utf8')
  template = template.replace('{{ main }}', html.join(''))

  return template
  // console.log(html.join(''))
}

module.exports = render

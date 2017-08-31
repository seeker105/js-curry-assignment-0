'use strict'

const entries =
  obj =>
    Object.keys(obj)
      .map(key => [key, obj[key]])

const listing =
  (name, price) => ({
    name,
    price
  })

const customer =
  (name, shoppingList) => ({
    name,
    shoppingList
  })

const cart =
  (customer, ...items) => ({
    customer,
    items
  })

/**
 * should return an array with the `itemName` repeated `count` number of times
 */
const itemRepeater =
  itemName =>
    count => {
      let result = []
      for (let x=0; x < count; x++){
        result.push(itemName)
      }
      return result
    }

/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
const constructCarts =
  listings =>
    customers => {
      let resultArray = []
      for (let x=0; x < customers.length; x++){
        let listOb = customers[x].shoppingList
        let itemList = []
        for (let itemName in listOb) {
          itemList = itemList.concat(itemRepeater(itemName)(listOb[itemName]))
        }
        resultArray.push({
          customer: customers[x].name,
          items: itemList
        })
      }
      return resultArray
    }

module.exports = {
  listing,
  customer,
  constructCarts
}

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
    count => 
      Array(count).fill(itemName)

/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
const constructCarts =
  listings =>
    customers => {
      return customers.reduce(
        (cartArray, currentCustomer) => {
          let entriesArray = entries(currentCustomer.shoppingList)
          cartArray.push({
            customer: currentCustomer.name,
            items: entriesArray.reduce(
              (itemStrings, currentItem) => {
                let currentItemList = itemRepeater(currentItem[0])(currentItem[1])
                return itemStrings.concat(currentItemList)
              }, [])
          })
          return cartArray
        }, [])
    }

module.exports = {
  listing,
  customer,
  constructCarts
}

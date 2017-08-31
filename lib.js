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
 * Accepts an array of key-value pairs stored as separate arrays. Example:
 * 
 * [ ['detergent', 2], ['cookies', 3] ]
 * 
 * Returns 1 dimensional array in which each key appears the number of times
 * specified in it's value. The above input would produce
 * 
 * ['detergent', 'detergent', 'cookies', 'cookies', 'cookies']
 * 
 * If a value from a key-value pair is not an integer the behavior is undefined
 * @param {Array} entriesArray 
 */
const getCurrentItemList = (entriesArray) => 
  entriesArray.reduce(
    (itemStrings, currentItem) => {
      let currentItemList = itemRepeater(currentItem[0])(currentItem[1])
      return itemStrings.concat(currentItemList)
    }, [])


/**
 * should return an array of carts with each given customer's shopping list
 * as an array of items
 */
const constructCarts =
  listings =>
    customers => 
      customers.reduce(
        (cartArray, currentCustomer) => {
          cartArray.push({
            customer: currentCustomer.name,
            items: getCurrentItemList(entries(currentCustomer.shoppingList))
          })
          return cartArray
        }, [])
    

module.exports = {
  listing,
  customer,
  constructCarts
}

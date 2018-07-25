var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var price = Math.floor(Math.random() * 100) + 1
  var itemObject = {itemName: item, itemPrice: price}
  cart.push(itemObject)
  return `${item} has been added to your cart.`
}

function getConnector(index, length) {
  if (index === 0) {
    return ""
  } else if (index === (length - 1)) {
    return ", and "
  } else {
    return ", "
  }
}
  

function viewCart() {
  var text = "In your cart, you have "
<<<<<<< HEAD
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  var i
  for (i = 0; i < cart.length; i++) { 
    text += getConnector(i, cart.length)
=======
  var i;
  if (cart.length === 0) {
    return "Your shopping cart is empty."
  }
  for (i = 0; i < cart.length; i++) { 
    if (i > 0) {
      text += ", and "
    }
>>>>>>> 25e25e45816cf3cb1ad493f96d1720232fba34b1
    text += `${cart[i].itemName} at $${cart[i].itemPrice}`
  }
  return text + '.'
}

function total() {
  var theTotal = 0
  var i
  for (i = 0; i < cart.length; i++) { 
    theTotal += cart[i].itemPrice
  }
  return theTotal
}

function removeFromCart(itemName) {
  var index = cart.findIndex(i => i.itemName === itemName)
  if (index === -1) {
    return "That item is not in your cart."
  }
  cart.splice(index, 1)
}

function placeOrder(cardNumber) {
  if (cardNumber === undefined) {
    return "Sorry, we don't have a credit card on file for you."
  } 
  
  var statement = `Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`
  cart = []
  return statement
}

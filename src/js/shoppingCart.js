const shoppingCart = document.querySelector('.shopping-cart .cart-items');
let cartItems = [];

function addToCart(movieTitle, showtime) {
  const item = { title: movieTitle, time: showtime, price: 10.00 }; // Assuming a fixed price for each ticket
  cartItems.push(item);

  // Update the shopping cart display
  updateShoppingCart();
}

function updateShoppingCart() {
  shoppingCart.innerHTML = '';
  let subtotal = 0.00;

  cartItems.forEach(item => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `${item.title} - ${item.time} <button onclick="removeFromCart(${cartItems.indexOf(item)})">Remove</button>`;
    shoppingCart.appendChild(listItem);
    subtotal += item.price;
  });

  // Update subtotal and total
  document.querySelector('.shopping-cart .subtotal').textContent = subtotal.toFixed(2);
  document.querySelector('.shopping-cart .total').textContent = subtotal.toFixed(2);
}

function removeFromCart(index) {
    cartItems.splice(index, 1);
    updateShoppingCart();
}

function selectMovie(checkbox, title) {
    if (checkbox.checked) {
      addToCart(title, 'Default Time'); // You can replace 'Default Time' with the actual default showtime
    } else {
      removeFromCartByTitle(title);
    }
  }
  
  function removeFromCartByTitle(title) {
    const index = cartItems.findIndex(item => item.title === title);
    if (index !== -1) {
      cartItems.splice(index, 1);
      updateShoppingCart();
    }
  }
  
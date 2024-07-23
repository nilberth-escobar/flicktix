/* 
function addToCart(id, title, year, image, price) {
  // Retrieve selected day and hour
  const selectedDay = document.getElementById('day').value;
  const selectedHour = document.getElementById('hour').value;

  // Retrieve existing cart items from local storage
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Add the selected movie with day and hour to the cart
  cartItems.push({ id, title, year, image, price, day: selectedDay, hour: selectedHour });

  // Update local storage with the modified cart items
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Optionally, you can display a message or update the UI to indicate the addition to the cart
  console.log('Added to cart:', { id, title, year, image, price, day: selectedDay, hour: selectedHour });
  updateCartDisplay();
}

let isCartVisible = true;

function toggleCartVisibility() {
  const cartDiv = document.getElementById('cartDiv');
  isCartVisible = !isCartVisible;
  cartDiv.style.display = isCartVisible ? 'block' : 'none';
}

function updateCartDisplay() {
  const cartDom = document.querySelector('.cart');
  const cartCountSpan = document.getElementById('cartCount');
  const totalPriceSpan = document.getElementById('totalPrice');

  // Retrieve cart items from local storage
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Update cart count
  cartCountSpan.innerText = cartItems.length;

  //clear cart content
  cartDom.innerHTML = '';

  //calculate total price
  let totalPrice = 0;
  cartItems.forEach(item => {
    totalPrice += item.price;
  })

  //loop through cart items and display
  cartItems.forEach(item => {
    cartDom.insertAdjacentHTML('beforeend', `
        
        <div class="d-flex flex-row shadow-sm card cart-items mt-2 mb-3 animated flipInX">
            <div class="p-2 mt-3">
                <img src="${item.image}" alt="${item.title}" style="max-width: 50px;"/>
            </div>
            <div class="p-2 mt-3">
                <p class="text-info cart_item_name">${item.title}</p>
            </div>
            <div class="p-2 mt-3">
                <p class="text-info cart_item_time">${item.day}, ${item.hour}</p>
            </div>

            <div class="p-2 mt-3">
                <p class="text-info cart_item_price">Price: $${item.price}</p>
            </div>

            <div class="p-2 mt-3 ml-auto">
                <button class="btn badge badge-secondary" type="button" data-action="remove-item">Remove</button>
                
            </div>
        </div>

        <div class="p-2 mt-3 ml-auto">
            <p class="text-info cart_item_total_price">Total Price: $${totalPrice}</p>
        </div>
        <div class="p-2 mt-3 ml-auto">
        <button class="btn btn-primary checkout-button" type="button" data-action="checkout">Checkout</button>
        </div>
        
    `, 
     ); 

    // Add event listener for the checkout button
    const checkoutButton = cartDom.querySelector('.checkout-button');
    checkoutButton.addEventListener('click', () => {
        // Redirect to the payment page
        window.location.href = 'payment.html'; // Replace 'payment.html' with your actual payment page URL
    });
});


    // Add event listener for the "Remove" button
    const removeButtons = cartDiv.querySelectorAll('[data-action="remove-item"]');
    removeButtons.forEach(removeButton => {
      removeButton.addEventListener('click', () => {
        const cartItemDom = removeButton.closest('.cart-items');
        const itemName = cartItemDom.querySelector('.cart_item_name').innerText;

        // Remove the item from the cart and update local storage
        const updatedCartItems = JSON.parse(localStorage.getItem('cartItems')).filter(item => item.title !== itemName);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));

        // Update the cart display
        updateCartDisplay();
      });
    });
  };

  // Update cart visibility based on the number of items
  toggleCartVisibility();


// Initial cart update on page load
updateCartDisplay(); */

function addToCart(id, title, year, image, price) {
  const selectedDay = document.getElementById('day').value;
  const selectedHour = document.getElementById('hour').value;
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  
  const existingItemIndex = cartItems.findIndex(item => item.id === id && item.day === selectedDay && item.hour === selectedHour);
  if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity++;
  } else {
      cartItems.push({ id, title, year, image, price, day: selectedDay, hour: selectedHour, quantity: 1 });
  }
  
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  updateCartDisplay();
}

function updateCartDisplay() {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  const cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';

  let total = 0;
  let itemCount = 0;

  cartItems.forEach((item, index) => {
      total += item.price * item.quantity;
      itemCount += item.quantity;

      const cartItem = document.createElement('div');
      cartItem.innerHTML = `
          <p>
              <a href="#">${item.title} (${item.year}) - ${item.day} at ${item.hour}</a>
              <span class="price">$${(item.price * item.quantity).toFixed(2)}</span>
              <button class="increment-btn" onclick="changeQuantity(${index}, 1)">+</button>
              <span>${item.quantity}</span>
              <button class="decrement-btn" onclick="changeQuantity(${index}, -1)">-</button>
              <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
          </p>
      `;
      cartItemsContainer.appendChild(cartItem);
  });

  document.getElementById('total-price').textContent = `$${total.toFixed(2)}`;
  document.getElementById('item-count').textContent = itemCount;
}

function removeFromCart(index) {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems.splice(index, 1);
  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  updateCartDisplay();
}

function changeQuantity(index, change) {
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  cartItems[index].quantity += change;

  if (cartItems[index].quantity <= 0) {
      cartItems.splice(index, 1);
  }

  localStorage.setItem('cartItems', JSON.stringify(cartItems));
  updateCartDisplay();
}

// Initialize the cart display on page load
updateCartDisplay();
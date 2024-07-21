function addToCart(id, title, year, image, price) {
    const selectedDay = document.getElementById('day').value;
    const selectedHour = document.getElementById('hour').value;
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartItems.push({ id, title, year, image, price, day: selectedDay, hour: selectedHour });
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
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
    const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    cartCountSpan.innerText = cartItems.length;
    if (cartDom) {
      cartDom.innerHTML = '';
      let totalPrice = 0;
      cartItems.forEach(item => {
        totalPrice += item.price;
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
        `);
      });
      totalPriceSpan.innerText = totalPrice.toFixed(2);
      const removeButtons = document.querySelectorAll('[data-action="remove-item"]');
      removeButtons.forEach(removeButton => {
        removeButton.addEventListener('click', () => {
          const cartItemDom = removeButton.closest('.cart-items');
          const itemName = cartItemDom.querySelector('.cart_item_name').innerText;
          const updatedCartItems = JSON.parse(localStorage.getItem('cartItems')).filter(item => item.title !== itemName);
          localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
          updateCartDisplay();
        });
      });
    }
  }
  
  document.addEventListener('DOMContentLoaded', updateCartDisplay);
  
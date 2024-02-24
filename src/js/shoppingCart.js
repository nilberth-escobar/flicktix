/* function addToCart(id) {
  console.log(id);
  const item = movies20.find(movie => movie.id === id);
  console.log(item);
} */

/* function addToCart(id, title, year, image) {
  // Retrieve existing cart items from local storage
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Add the selected movie to the cart
  cartItems.push({ id, title, year, image });

  // Update local storage with the modified cart items
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Optionally, you can display a message or update the UI to indicate the addition to the cart
  console.log('Added to cart:', { id, title, year, image });
} */

function addToCart(id, title, year, image) {
  // Retrieve selected day and hour
  const selectedDay = document.getElementById('day').value;
  const selectedHour = document.getElementById('hour').value;

  // Retrieve existing cart items from local storage
  const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];

  // Add the selected movie with day and hour to the cart
  cartItems.push({ id, title, year, image, day: selectedDay, hour: selectedHour });

  // Update local storage with the modified cart items
  localStorage.setItem('cartItems', JSON.stringify(cartItems));

  // Optionally, you can display a message or update the UI to indicate the addition to the cart
  console.log('Added to cart:', { id, title, year, image, day: selectedDay, hour: selectedHour });
}
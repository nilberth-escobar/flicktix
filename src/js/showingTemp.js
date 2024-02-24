/* function showingCardTemplate(movie) {
  return `
    <li class="movie-card">
      <a href="src/seats.html" alt="Link to movie details">
        <img src="${movie.image || 'placeholder.jpg'}" alt="Image of ${movie.title}" />
      </a>
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>${movie.year}</p>
        <ul class="movie-details">
          <li>Release Date: ${movie.releaseDate}</li>
          ${movie.rating ? `<li>Rating: ${movie.rating}</li>` : ''}
        </ul>
        <div class="add-to-cart" onclick="addToCart(${movie.id}, '${movie.title}', '${movie.year}', '${movie.image || 'placeholder.jpg'}')">
          <img src="./src/images/add-to-cart.png" alt="add to cart">
          Add to cart
        </div>
      </div>
    </li>`;
} */

function showingCardTemplate(movie) {
  return `
    <li class="movie-card">
      <a href="src/seats.html" alt="Link to movie details">
        <img src="${movie.image || 'placeholder.jpg'}" alt="Image of ${movie.title}" />
      </a>
      <div class="movie-info">
        <h3>${movie.title}</h3>
        <p>${movie.year}</p>
        <ul class="movie-details">
          
          ${movie.rating ? `<li>Rating: ${movie.rating}</li>` : ''}
        </ul>
        
      </div>
    </li>`;
}
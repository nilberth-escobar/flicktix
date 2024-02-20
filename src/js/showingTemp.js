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
          ${`<li>Release Date:</li>`}
          ${movie.rating ? `<li>Rating: ${movie.rating}</li>` : ''}
          </ul>
      </div>
    </li>
  `;
}
 */

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
          <li>Showtimes: ${movie.showtimes.map(time => `<button onclick="addToCart('${movie.title}', '${time}')">${time}</button>`).join(' ')}</li>
        </ul>
      </div>
    </li>`;
} */
/* 
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
          <li>Release Date: ${movie.releaseDate}</li>
          ${movie.rating ? `<li>Rating: ${movie.rating}</li>` : ''}
          <li>Showtimes: ${movie.showtimes.map(time => `<button onclick="addToCart('${movie.title}', '${time}')">${time}</button>`).join(' ')}</li>
        </ul>
        <label>
          <input type="checkbox" onchange="selectMovie(this, '${movie.title}')"> Select for Cart
        </label>
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
          <li>Release Date: ${movie.releaseDate}</li>
          ${movie.rating ? `<li>Rating: ${movie.rating}</li>` : ''}
          
        </ul>
        <label>
          <input type="checkbox" onchange="selectMovie(this, '${movie.title}')"> Select for Cart
        </label>
      </div>
    </li>`;
}

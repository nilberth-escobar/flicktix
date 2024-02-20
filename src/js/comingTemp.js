function comingCardTemplate(movie) {
    return `
      <li class="movie-card">
       /*  <a href="${movie.url || '#'}" alt="Link to movie details">
          <img src="${movie.image || 'placeholder.jpg'}" alt="Image of ${movie.title}" />
        </a> */
        <div class="movie-info">
          <h3>${movie.date}</h3>
          <p>${movie.year}</p>
          <ul class="movie-details">
            ${movie.genre ? `<li>Genre: ${movie.genre}</li>` : ''}
            ${movie.releaseDate ? `<li>Release Date: ${movie.releaseDate}</li>` : ''}
            ${movie.rating ? `<li>Rating: ${movie.rating}</li>` : ''}
            </ul>
        </div>
      </li>
    `;
  }
  
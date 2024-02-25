function showingCardTemplate(movie) {
    return `
      <li class="movie-card">
        <a href="#" alt="Link to movie details">
          <img src="${movie.image || 'placeholder.jpg'}" alt="Image of ${movie.title}" />
        </a>
        <div class="movie-info">
          <h3>${movie.title}</h3>
          <p>${movie.year}</p>
          <ul class="movie-details">
            <li>Price: $${movie.price}</li>
            ${movie.rating ? `<li>Rating: ${movie.rating}</li>` : ''}
          </ul>
          <div class="showing-options">
            <label for="day">Day:</label>
            <select id="day">
              <option value="Thursday">Thursday</option>
              <option value="Friday">Friday</option>
              <option value="Saturday">Saturday</option>
              <option value="Sunday">Sunday</option>
              
            </select>
  
            <label for="hour">Hour:</label>
            <select id="hour">
              <option value="12">12:00 PM</option>
              <option value="15">3:00 PM</option>
              <option value="18">6:00 PM</option>
              <option value="21">9:00 PM</option>
              <option value="00">00:00 PM</option>
              
            </select>
          </div>
          <div class="add-to-cart" onclick="addToCart(${movie.id}, '${movie.title}', '${movie.year}', '${movie.image || 'placeholder.jpg'}', ${movie.price})">
            <img src="images/add-to-cart.png" alt="add to cart">
            Add to cart
          </div>
        </div>
      </li>`;
  }
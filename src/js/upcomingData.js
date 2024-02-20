const urlAPI = 'https://moviesverse1.p.rapidapi.com/upcoming-movies';
const optionsAPI = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '5b32c1237bmsh2b9b749420f648ep1f2e87jsnb3546f127a5b', // Replace with your actual API key
        'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
    }
};

async function populateComingMovies() {
    try {
        const response = await fetch(urlAPI, optionsAPI);
        const data = await response.json();
        //console.log(data);
        const comingMovies = data.movies;
        console.log(comingMovies);
        const comingSoonList = document.querySelector('.coming-soon .movie-list');
        
        const coming20 = comingMovies.slice(0, 20);
        coming20.forEach(movie => {
            const listItem = document.createElement('li');
            const cardHtml = comingCardTemplate(movie); // Generate movie card HTML
            listItem.innerHTML = cardHtml;
            comingSoonList.appendChild(listItem);
        });
    } catch (error) {
        console.error('Error fetching upcoming movies:', error);
        // Handle errors gracefully, e.g., display an error message to the user
    }
}

function comingCardTemplate(movie) {
    // Your existing movie card template function that generates HTML using movie data
    return `
        <li class="movie-card">
            <a href="${movie.list[0].url}" alt="Link to movie details">
            <img src="${movie.list[0].image}" alt="Image of ${movie.list[0].title}"/>
          </a> 
          <div class="movie-info">
            <h3>${movie.date}</h3>
            <p>${movie.list[0].title}</p>
            <ul class="movie-details">
              ${movie.genre ? `<li>Genre: ${movie.genre}</li>` : ''}
              ${movie.releaseDate ? `<li>Release Date: ${movie.releaseDate}</li>` : ''}
              ${movie.rating ? `<li>Rating: ${movie.rating}</li>` : ''}
              </ul>
          </div>
        </li>
      `;
}

populateComingMovies(); // Call the function to fetch and populate data

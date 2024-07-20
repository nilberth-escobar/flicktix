
/* const url = 'https://moviesverse1.p.rapidapi.com/most-popular-movies';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': '5b32c1237bmsh2b9b749420f648ep1f2e87jsnb3546f127a5b',
    'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com',
  },
}; */

const url = 'https://moviesverse1.p.rapidapi.com/top-box-office-movies';
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '5b32c1237bmsh2b9b749420f648ep1f2e87jsnb3546f127a5b',
		'x-rapidapi-host': 'moviesverse1.p.rapidapi.com'
	}
};

let movies20 = [];
async function fetchAndPopulateMovies(movies20) {
  
  try {
    const response = await fetch(url, options);
    const data = await response.json();
    const nowShowingMovies = data.movies;

    // Add unique IDs to movies
    const moviesWithIds = nowShowingMovies.map((movie, index) => ({
      ...movie,
      id: index + 1,
      price: Math.floor(Math.random() * 10) + 25,
    }));

    // Truncate and display movies
    const movies20 = moviesWithIds.slice(0, 20);

    console.log(movies20);
    
    const nowShowingList = document.querySelector('.now-showing .movie-list');
    movies20.forEach((movie) => {
      const listItem = document.createElement('li');
      const cardHtml = showingCardTemplate(movie); // Generate movie card HTML
      listItem.innerHTML = cardHtml; // Use innerHTML to set card HTML
      nowShowingList.appendChild(listItem);
    });
    
  } catch (error) {
    console.error('Error fetching movies:', error);
    // Handle the error gracefully, e.g., display an error message to the user
  }
  
}
fetchAndPopulateMovies();

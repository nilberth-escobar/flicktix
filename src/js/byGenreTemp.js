
/* const fetchButton = document.getElementById('fetchButton');
const resultsDiv = document.getElementById('results');

fetchButton.addEventListener('click', async () => {
    const genre = document.getElementById('genreSelect').value;
    try {
        const movies = await fetchMovies(genre);
        let resultHtml = '';

        for (const movie of movies) {
            resultHtml += `<h2>${movie.title}</h2>`;
            resultHtml += `<p>${movie.description}</p>`;
        }

        resultsDiv.innerHTML = resultHtml;
    } catch (error) {
        resultsDiv.innerHTML = `Error: ${error.message}`;
    }
}); */

const fetchButton = document.getElementById('fetchButton');
const resultsDiv = document.getElementById('results');
const genreSelect = document.getElementById('genreSelect');

fetchButton.addEventListener('click', async () => {
  const genre = genreSelect.value; // Get the selected genre

  try {
    const movies = await fetchMovies(genre);

    let resultHtml = '';

    if (movies.length > 0) {
      // If movies are found, create the HTML structure
      resultHtml += '<h2>Now Showing</h2>';
      resultHtml += '<ul class="movie-list">';

      for (const movie of movies) {
        resultHtml += `<li>`;
        resultHtml += `  <h3>${movie.title}</h3>`;
        resultHtml += `  <p>${movie.description}</p>`; // Assuming 'description' exists in API response
        resultHtml += `</li>`;
      }

      resultHtml += '</ul>';
    } else {
      // If no movies are found, display a message
      resultHtml += '<p>No movies found for this genre.</p>';
    }

    resultsDiv.innerHTML = resultHtml;
  } catch (error) {
    resultsDiv.innerHTML = `Error: ${error.message}`;
  }
});

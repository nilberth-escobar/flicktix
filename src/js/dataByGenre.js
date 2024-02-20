/* const url = 'https://moviesverse1.p.rapidapi.com/get-by-genre?genre=action';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'b8d238b27fmsh972a2c298f17612p12fafejsn325b02608b36',
    'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com'
  }
};

try {
  const response = await fetch(url, options);
  const result = await response.json();
  console.log(result);
} catch (error) {
  console.error(error);
} */

/* function fetchMovies(genre) {
    const url = 'https://moviesverse1.p.rapidapi.com/get-by-genre';
    const apiKey = 'b8d238b27fmsh972a2c298f17612p12fafejsn325b02608b36'; // Replace with your API key
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': apiKey,
        'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com',
      },
    };
  
    return fetch(url + `?genre=${genre}`, options)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        return data; // Return the fetched movie data
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
        throw error; // Re-throw the error for proper handling
      });
  }
  
  // Example usage:
  const genre = 'action'; // Replace with desired genre
  
  fetchMovies(genre)
    .then(movies => {
      console.log('Fetched movies:', movies);
      // Process the fetched movie data here
    })
    .catch(error => {
      console.error('An error occurred:', error);
      // Handle errors appropriately
    });
   */

async function fetchMovies(genre) {
  const url = 'https://moviesverse1.p.rapidapi.com/get-by-genre';
  const apiKey = 'b8d238b27fmsh972a2c298f17612p12fafejsn325b02608b36'; 
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'moviesverse1.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url + `?genre=${genre}`, options);
    const data = await response.json();

    // Assuming the API response contains a key like 'movies' that holds the array
    const moviesArray = data.movies || [];
    console.log('Fetched movies:', moviesArray);

    if (!Array.isArray(moviesArray)) {
      throw new Error('Response does not contain an array of movies');
    }

    return moviesArray;
  } catch (error) {
    console.error('Error fetching movies:', error);
    throw error;
  }
}

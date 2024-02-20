// Assuming you have seat data available (rows, columns, categories, etc.)
const seatData = {
    rows: 10,
    columns: 15,
    categories: [
      { name: "Standard", price: 20 },
      { name: "VIP", price: 30 },
    ],
  };
  
  // Function to create a seat element
  function createSeat(row, col, category) {
    const seat = document.createElement('div');
    seat.classList.add('seat');
    seat.id = `seat-${row}-${col}`;
    seat.textContent = `${col + 1}`; // Assuming zero-based column index
    seat.dataset.category = category; // Store category data
  
    // Add event listener for seat selection
    seat.addEventListener('click', handleSeatClick);
  
    return seat;
  }
  
  // Function to handle seat selection
  function handleSeatClick(event) {
    const seat = event.target;
    const selectedSeats = document.getElementById('selected-seats');
  
    // Clear any existing selection
    selectedSeats.textContent = "";
  
    // Update selected seat
    selectedSeats.textContent = seat.id;
  
    // Toggle seat style to indicate selection (Optional)
    seat.classList.toggle("selected");
  }
  
  
  // Function to populate the seating chart
  function populateSeatingChart() {
    const seatingChart = document.querySelector('.seating-chart');
  
    for (let row = 0; row < seatData.rows; row++) {
      const rowElement = document.createElement('div');
      rowElement.classList.add('row');
  
      for (let col = 0; col < seatData.columns; col++) {
        const category = seatData.categories[Math.floor(Math.random() * seatData.categories.length)]; // Randomly assign category
        const seat = createSeat(row, col, category);
        rowElement.appendChild(seat);
      }
  
      seatingChart.appendChild(rowElement);
    }
  }
  
  populateSeatingChart();
  
  const maxSeats = 5; // Maximum number of seats allowed

function handleSeatClick(event) {
  const seat = event.target;
  const selectedSeats = document.getElementById('selected-seats');

  // Get current selected seats (assuming you have a way to store them)
  const currentSeats = []; // Replace with your implementation of accessing selected seats

  // Check if exceeding max seats limit
  if (currentSeats.length >= maxSeats) {
    alert("Maximum number of seats reached!");
    return;
  }

  // Update selected seats
  if (currentSeats.includes(seat.id)) { // Deselect if already selected
    currentSeats.splice(currentSeats.indexOf(seat.id), 1);
  } else { // Add to selection
    currentSeats.push(seat.id);
  }

  // Update selected seats text
  selectedSeats.textContent = currentSeats.join(", ");

  // Update seat style based on selection (Optional)
  // ...
}

const availableSeats = ["seat-1-2", "seat-2-3", ...]; // Replace with actual available seats

function handleSeatClick(event) {
  const seat = event.target;
  const selectedSeats = document.getElementById('selected-seats');

  // Check if seat is available
  if (!availableSeats.includes(seat.id)) {
    alert("Seat is not available!");
    return;
  }

  // Update selected seats and availability (similar to Approach 2)
  // ...

  // Update availableSeats based on selection
  // ...
}

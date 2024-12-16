
function getRandomColor() {
  // Create an array of colors
  const colors = ['#FF5733', '#33FF57', '#3357FF', '#F33FFF', '#F0F0F0', '#FFFF00', '#800080'];

  // Pick a random index from the colors array
  const randomIndex = Math.floor(Math.random() * colors.length);

  // Return the color at the random index
  return colors[randomIndex];
}

// Function to change the color of the square
function changeColor(squareId) {
  // Find the square by its ID (using the parameter squareId)
  const square = document.getElementById(squareId);
  
  // Get a random color using the getRandomColor function
  const randomColor = getRandomColor();
  
  // Change the background color of the square to the random color
  square.style.backgroundColor = randomColor;
}

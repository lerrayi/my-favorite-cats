// Get all the "Next" buttons
const nextButtons = document.querySelectorAll('.next-btn');

// Loop through each button and add a click event
nextButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    // Hide the button after it's clicked
    button.style.display = 'none';

    // Show the next parallax section (if it exists)
    const nextParallax = document.querySelectorAll('.parallax')[index + 1];
    if (nextParallax) {
      nextParallax.style.display = '';
    }
  });
});

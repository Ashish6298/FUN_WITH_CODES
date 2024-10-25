const letters = document.querySelectorAll('.letter');
const delay = 1000; // Delay in milliseconds
const text = ['T', 'H', 'A', 'N', 'K', 'Y', 'O', 'U', 'S', 'O', 'M', 'U', 'C', 'H'];

setTimeout(() => {
  letters.forEach((letter, index) => {
    letter.textContent = text[index] || '';
  });
}, delay);
document.getElementById('surprise-button').addEventListener('click', function() {
  // Hide the button
  this.style.display = 'none';
  
  // Show the animation
  document.getElementById('animation').style.display = 'flex';
});

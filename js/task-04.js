let counterValue = 0;

// Get elements
const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueSpan = document.getElementById('value');

// Add click event listeners
decrementBtn.addEventListener('click', () => {
  counterValue -= 1;
  updateCounter();
});

incrementBtn.addEventListener('click', () => {
  counterValue += 1;
  updateCounter();
});

// Update the interface with the current counterValue
function updateCounter() {
  valueSpan.textContent = counterValue;
}
const nameInput = document.getElementById('name-input');
  const nameOutput = document.getElementById('name-output');

  // Add input event listener
  nameInput.addEventListener('input', () => {
    // Update nameOutput with the current value of nameInput
    nameOutput.textContent = nameInput.value.trim() !== '' ? nameInput.value : 'Anonymous';
  });
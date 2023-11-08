
const loginForm = document.querySelector('.login-form');

// Add submit event listener
loginForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get the form elements
  const emailInput = this.elements.email;
  const passwordInput = this.elements.password;

  if (emailInput.value.trim() === '' || passwordInput.value.trim() === '') {
    alert('Please fill in all fields');
    return;
  }

  // Create form data
  const formData = {
    email: emailInput.value,
    password: passwordInput.value,
  };
 
  console.log(formData);

  this.reset();
});
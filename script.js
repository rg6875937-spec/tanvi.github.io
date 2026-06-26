// Add interactivity here
document.addEventListener('DOMContentLoaded', () => {
    console.log('Portfolio website loaded!');
  });
  // Handle form submission
const form = document.getElementById('contact-form');
const formStatus = document.getElementById('form-status');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Prevent default form submission

  // Get form data
  const formData = new FormData(form);

  // Send form data using Fetch API
  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (response.ok) {
      formStatus.innerHTML = 'Thank you! Your message has been sent.';
      form.reset(); // Clear the form
    } else {
      formStatus.innerHTML = 'Oops! There was a problem sending your message.';
    }
  })
  .catch(error => {
    formStatus.innerHTML = 'Oops! There was a problem sending your message.';
  });
});
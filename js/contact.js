const scriptURL = 'https://script.google.com/macros/s/AKfycbymXBQSKNmW1_6thqUoSlSIAI91iDOzOL24R0faG63j7E3KVJIBz1jJyVugJxnCqGxu/exec'

const form = document.forms['contact-form']
const submitButton = document.querySelector('button[type="submit"]');


form.addEventListener('submit', e => {
 e.preventDefault()
 submitButton.disabled = true;
 fetch(scriptURL, { method: 'POST', body: new FormData(form)})
 .then(response => alert("Thank you! your form is submitted successfully." ))
 .then(() => { window.location.reload(); })
 .catch(error => console.error('Error!', error.message))
})
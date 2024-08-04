const form = document.getElementById('form');
form.addEventListener('submit', function(event) {
  event.preventDefault()
  let isValid = true;
  const name = document.getElementById('name').value
  const nameError = document.getElementById('nameError');
  nameError.textContent = '';
  if (!name) {
    nameError.textContent = 'Name field is required';
    isValid = false;
  }

  const phone = document.getElementById('phone').value
  const regex = /^\+?3?8?(0\d{9})$/;
  const phoneError = document.getElementById('phoneError');
  if(regex.test(phone) ) {
   phoneError.textContent = '';
   isValid = true;
  }
  else if(!phone) {
    phoneError.textContent ='Phone field is required';
    isValid = false;
  }
  else {
  phoneError.textContent ='Not valid number';
  isValid = false;
  }
   const message = document.getElementById('message').value
  const messageError = document.getElementById('messageError');
  messageError.textContent = '';
  if (message.length < 5) {
    messageError.textContent = 'Message area must have 5 or more symbols';
    isValid = false;
  }
  
  const emailInput = document.getElementById('email').value
  const emailError = document.getElementById('emailError');
  const emailRegex = /^\S+@\S+\.\S+$/;
  if(emailRegex.test(emailInput)) {
  emailError.innerText = ''
   isValid = true;
  }
  else {
  emailError.textContent ='Email must have "@" and "."';
  isValid = false;
  }
  if(isValid) {
  const myFormData = new FormData(form);
  const formDataAsObject = Object.fromEntries(myFormData);
  console.log(formDataAsObject)
  }
})

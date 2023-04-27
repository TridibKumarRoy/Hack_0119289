const signupForm = document.querySelector('#signupModal form');

signupForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting

  // get the form data
  const name = document.querySelector('#signupName').value;
  const email = document.querySelector('#signupEmail').value;
  const password = document.querySelector('#signupPassword').value;

  // print the form data in the console
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Password:', password);

  // TODO: send the form data to the server using AJAX or fetch

  // hide the modal
const loginModal = document.querySelector('#signupModal');
const bootstrapModal = bootstrap.Modal.getInstance(signupModal);
bootstrapModal.hide();
});





const loginForm = document.querySelector('#loginModal form');

loginForm.addEventListener('submit', (event) => {
  event.preventDefault(); // prevent the form from submitting
  
  // get the form data
  const email = document.querySelector('#loginEmail').value;
  const password = document.querySelector('#loginPassword').value;
  
  // print the form data in the console
  console.log('Email:', email);
  console.log('Password:', password);
  
  // TODO: send the form data to the server using AJAX or fetch

  // hide the modal
const loginModal = document.querySelector('#loginModal');
const bootstrapModal = bootstrap.Modal.getInstance(loginModal);
bootstrapModal.hide();
});


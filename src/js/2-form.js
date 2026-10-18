const form = document.querySelector('.feedback-form');

const formState = {
  email: '',
  message: '',
};

const savedForm = localStorage.getItem('feedback-form-state');

if (savedForm) {
  const savedData = JSON.parse(savedForm);

  formState.email = savedData.email || '';
  formState.message = savedData.message || '';

  form.elements.email.value = formState.email;
  form.elements.message.value = formState.message;
}

form.addEventListener('input', event => {
  if (event.target.name === 'email') {
    formState.email = event.target.value.trim();
  }

  if (event.target.name === 'message') {
    formState.message = event.target.value.trim();
  }

  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
});

form.addEventListener('submit', event => {
  event.preventDefault();

  formState.email = form.elements.email.value.trim();
  formState.message = form.elements.message.value.trim();

  if (formState.email === '' || formState.message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log({
    email: formState.email,
    message: formState.message,
  });

  localStorage.removeItem('feedback-form-state');

  formState.email = '';
  formState.message = '';

  form.reset();
});

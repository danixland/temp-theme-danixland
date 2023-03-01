/**
 * @file
 * A JavaScript file for the contact form.
 */

(function () {

  'use strict';

  const form = document.querySelector('.contact-form');
  const submit_button = form.querySelector('.form-submit');
  const reset_button = form.querySelector('.form-reset');
  const action = form.getAttribute('data-protect');
  const body = document.querySelector('body');

  function activateForm() {
    form.setAttribute('action', action);
    submit_button.removeAttribute('disabled');
    reset_button.removeAttribute('disabled');
  }

  // Display the hidden form.
  form.classList.remove('hidden');

  // Wait for a mouse to move, indicating they are human.
  body.addEventListener('mousemove', () => activateForm());
  // Wait for a touch move event, indicating that they are human.
  body.addEventListener('touchmove', () => activateForm());
  // A tab or enter key pressed can also indicate they are human.
  body.addEventListener('keydown', function (e) {
    if ((e.key === 'Tab') || (e.key === 'Enter')) {
      activateForm();
    }
  });

  // Mark the form as submitted.
  submit_button.addEventListener('click', () => form.classList.add('js-submitted'));

  // Reset the form with the clear button
  reset_button.addEventListener('click', () => form.reset());

  // Display messages.
  if (location.search.substring(1) !== '') {
    switch (location.search.substring(1)) {
      case 'submitted':
        document.querySelector('.contact-submitted').classList.remove('hidden');
        break;

      case 'error':
        document.querySelector('.contact-error').classList.remove('hidden');
        break;
    }
  }

})();

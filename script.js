document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.button, .button-secondary');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      button.classList.add('clicked');
      setTimeout(() => button.classList.remove('clicked'), 220);
    });
  });

  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach((item) => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });

  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');
  if (contactForm) {
    contactForm.addEventListener('submit', (event) => {
      event.preventDefault();
      formSuccess.hidden = false;
      contactForm.reset();
      setTimeout(() => {
        formSuccess.hidden = true;
      }, 3800);
    });
  }
});

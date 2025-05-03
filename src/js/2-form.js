const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

window.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved) {
    try {
      const parsed = JSON.parse(saved);
      form.elements.email.value = parsed.email || '';
      form.elements.message.value = parsed.message || '';
    } catch (error) {
      console.error('Local storage parse error:', error);
    }
  }
});

form.addEventListener('input', e => {
  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  const currentData = {
    email,
    message,
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(currentData));
});


form.addEventListener('submit', e => {
  e.preventDefault();

  const email = form.elements.email.value.trim();
  const message = form.elements.message.value.trim();

  if (!email || !message) {
    alert('Lütfen tüm alanları doldurun.');
    return;
  }

  const submittedData = { email, message };
  console.log(submittedData);

  // Temizleme
  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

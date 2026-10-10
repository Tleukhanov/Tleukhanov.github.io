// Печатающийся подзаголовок + год в подвале. Без фреймворков.

const roles = [
  'AI Engineer (Python)',
  'LLM-интеграции и RAG',
  'бэкенд, который уезжает в прод',
];

const typedEl = document.getElementById('typed');
let roleIndex = 0;
let charIndex = 0;
let deleting = false;

function tick() {
  const role = roles[roleIndex];
  if (!deleting) {
    charIndex += 1;
    typedEl.textContent = role.slice(0, charIndex);
    if (charIndex >= role.length) {
      deleting = true;
      setTimeout(tick, 1800);
      return;
    }
    setTimeout(tick, 55);
  } else {
    charIndex -= 1;
    typedEl.textContent = role.slice(0, charIndex);
    if (charIndex <= 0) {
      deleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
    setTimeout(tick, 28);
  }
}

document.getElementById('year').textContent = new Date().getFullYear();
tick();

// Плавный скролл по якорям
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const target = document.querySelector(link.getAttribute('href'));
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

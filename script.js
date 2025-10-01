// Selecciona todas las secciones que queremos animar
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(
  entries,
  appearOnScroll
) {
  entries.forEach(entry => {
    if (!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('show');
      appearOnScroll.unobserve(entry.target);
    }
  });
}, appearOptions);

// Aplica el observer a cada elemento
faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

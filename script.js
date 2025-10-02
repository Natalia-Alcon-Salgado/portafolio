// Selecciona todas las tarjetas de proyectos
const proyectos = document.querySelectorAll(".proyecto");

// Función para revisar si el elemento está en pantalla
function revisarScroll() {
  const triggerBottom = window.innerHeight * 0.85;

  proyectos.forEach((proyecto) => {
    const proyectoTop = proyecto.getBoundingClientRect().top;

    if (proyectoTop < triggerBottom) {
      proyecto.classList.add("show");
    }
  });
}

// Escuchar el scroll
window.addEventListener("scroll", revisarScroll);

// Ejecutar al cargar la página
window.addEventListener("load", revisarScroll);

// Seleccionamos todas las secciones con fade-in
const faders = document.querySelectorAll(".fade-in");

const appearOptions = {
  threshold: 0.2, // porcentaje visible
  rootMargin: "0px 0px -50px 0px",
};

const appearOnScroll = new IntersectionObserver(function (
  entries,
  appearOnScroll
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("show");
    appearOnScroll.unobserve(entry.target); // animar solo una vez
  });
},
appearOptions);

faders.forEach((fader) => {
  appearOnScroll.observe(fader);
});



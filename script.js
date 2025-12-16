// Importa os Web Components
import "./components/navbar.js";
import "./components/footer.js";

// Smooth scrolling para âncoras internas
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Animação de seções ao rolar a página
const animateOnScroll = () => {
    const sections = document.querySelectorAll('section');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if (sectionTop < windowHeight - 100) {
            section.classList.add('animate-fade-in');
        }
    });
};

// Executa na carga inicial
animateOnScroll();

// Executa ao rolar
window.addEventListener('scroll', animateOnScroll);

// Feather Icons (centralizado aqui)
if (window.feather) {
    feather.replace();
}

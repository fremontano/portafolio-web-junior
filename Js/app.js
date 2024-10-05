// Cambiar color de las letras al hacer scroll
window.addEventListener('scroll', function () {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
        navbar.style.backgroundColor = 'backdrop-filter: blur(10px);'
    } else {
        navbar.classList.remove('scrolled');
    }
});


// carousel de skill 
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 20,
        nav: false, /* Oculta las flechas de navegación */
        dots: true, /* Muestra los puntos de navegación */
        autoplay: true,
        autoplayTimeout: 4200,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            900: {
                items: 2
            }
        }
    });
});


//typing information


function typingEffect() {
    const text = `Analista Programador con formación en desarrollo Frontend y Backend,`;
    const typingElement = document.querySelector('#typing-text');
    const typingDelay = 310;

    // Asegúrate de que el contenido del elemento esté vacío al inicio
    typingElement.textContent = '';

    typiText(text, typingElement, typingDelay);
}

function typiText(text, typingElement, delay) {
    for (let i = 0; i < text.length; i++) {
        setTimeout(() => {
            typingElement.textContent += text.charAt(i);
        }, delay * i);
    }
}

document.addEventListener('DOMContentLoaded', typingEffect);

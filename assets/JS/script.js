function clear() {
    document.getElementById("menu_nav").classList.remove('mobile_menu_open');
    document.getElementById("menu_nav").classList.add('mobile_menu');
}

function menu_open() {
    if (document.getElementById("menu_nav").classList == 'mobile_menu') {
        document.getElementById("menu_nav").classList.remove('mobile_menu');
        document.getElementById("menu_nav").classList.add('mobile_menu_open');
    } else{
        document.getElementById("menu_nav").classList.remove('mobile_menu_open');
        document.getElementById("menu_nav").classList.add('mobile_menu');
    }
}

const el = document.getElementById('currentYear');
const currentYear = new Date().getFullYear();
el.textContent = currentYear;
// ── Slider do Banner ──────────────────────────────────────

const sliders = document.querySelector('.banner .sliders');
const pointers = document.querySelectorAll('.banner .pointer_slider');
const totalSlides = 3;
let slideAtual = 0;
let autoplay;

function irPara(index) {
    slideAtual = index;

  // Move o container horizontalmente
    sliders.style.transform = `translateX(-${slideAtual * 100}vw)`;
    sliders.style.transition = 'transform 0.6s ease';

  // Atualiza os pontos indicadores
    pointers.forEach((p, i) => {
    p.style.backgroundColor = i === slideAtual ? '#F79421' : 'transparent';
    });
}

function proximoSlide() {
    irPara((slideAtual + 1) % totalSlides);
}

// Clique nos pontos
pointers.forEach((p, i) => {
    p.addEventListener('click', () => {
    clearInterval(autoplay);
    irPara(i);
    
    });
});



// Inicia no primeiro slide
irPara(0);

// ── Pause on Hover ────────────────────────────────────────

const banner = document.querySelector('.banner');

banner.addEventListener('mouseenter', () => {
  clearInterval(autoplay);
});

banner.addEventListener('mouseleave', () => {
  autoplay = setInterval(proximoSlide, 4000);
});
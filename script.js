// ===== SISTEMA DE FILTROS =====
document.querySelectorAll('.filtro-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        // Remove classe ativa de todos os botões
        document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('ativo'));
        
        // Adiciona classe ativa ao botão clicado
        this.classList.add('ativo');
        
        // Obtém a categoria selecionada
        const categoria = this.dataset.filtro;
        
        // Filtra as fotos
        document.querySelectorAll('.foto-item').forEach(item => {
            if (categoria === 'todos' || item.dataset.categoria === categoria) {
                item.classList.remove('hidden');
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// ===== SISTEMA DE LIGHTBOX =====
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxCaption = document.querySelector('.lightbox-caption');
const lightboxClose = document.querySelector('.lightbox-close');
const lightboxPrev = document.querySelector('.lightbox-prev');
const lightboxNext = document.querySelector('.lightbox-next');

let indiceAtual = 0;
let fotosVisíveis = [];

// Abre lightbox ao clicar em uma foto
document.querySelectorAll('.foto-item').forEach((item, index) => {
    item.addEventListener('click', function() {
        // Obtém todas as fotos visíveis (não ocultas)
        fotosVisíveis = Array.from(document.querySelectorAll('.foto-item:not(.hidden)'));
        indiceAtual = fotosVisíveis.indexOf(this);
        
        exibirFoto(indiceAtual);
        lightbox.classList.add('ativo');
    });
});

function exibirFoto(index) {
    if (fotosVisíveis.length === 0) return;
    
    // Garante que o índice esteja dentro dos limites
    if (index < 0) {
        indiceAtual = fotosVisIvel.length - 1;
    } else if (index >= fotosVisíveis.length) {
        indiceAtual = 0;
    } else {
        indiceAtual = index;
    }
    
    const foto = fotosVisíveis[indiceAtual];
    const img = foto.querySelector('img');
    const titulo = foto.querySelector('.foto-overlay h3');
    
    lightboxImg.src = img.src;
    lightboxCaption.textContent = titulo.textContent;
}

// Fecha lightbox
lightboxClose.addEventListener('click', function() {
    lightbox.classList.remove('ativo');
});

// Fecha lightbox ao clicar fora da imagem
lightbox.addEventListener('click', function(e) {
    if (e.target === lightbox) {
        lightbox.classList.remove('ativo');
    }
});

// Navegação anterior
lightboxPrev.addEventListener('click', function(e) {
    e.stopPropagation();
    exibirFoto(indiceAtual - 1);
});

// Navegação próxima
lightboxNext.addEventListener('click', function(e) {
    e.stopPropagation();
    exibirFoto(indiceAtual + 1);
});

// Navegação com teclado
document.addEventListener('keydown', function(e) {
    if (lightbox.classList.contains('ativo')) {
        if (e.key === 'ArrowLeft') {
            exibirFoto(indiceAtual - 1);
        } else if (e.key === 'ArrowRight') {
            exibirFoto(indiceAtual + 1);
        } else if (e.key === 'Escape') {
            lightbox.classList.remove('ativo');
        }
    }
});

// ===== SCROLL REVEAL =====
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observa todas as fotos para animação de entrada
document.querySelectorAll('.foto-item').forEach(item => {
    item.style.opacity = '0';
    item.style.transform = 'translateY(20px)';
    item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(item);
});

// ===== EFEITOS ADICIONAIS =====
// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

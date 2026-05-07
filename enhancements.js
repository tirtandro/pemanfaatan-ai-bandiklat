/* ============================================
   LOADING SCREEN
   ============================================ */
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loading-screen');
        if (loader) {
            loader.classList.add('hidden');
            setTimeout(() => loader.remove(), 800);
        }
    }, 2500);
});

/* ============================================
   STARFIELD GENERATOR
   ============================================ */
function generateStarfield() {
    const container = document.getElementById('starfield');
    if (!container) return;
    const count = 120;
    for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        const size = Math.random() * 3 + 1;
        star.style.cssText = `
            width:${size}px; height:${size}px;
            top:${Math.random()*100}%; left:${Math.random()*100}%;
            --dur:${Math.random()*3+2}s;
            --o1:${Math.random()*0.3+0.2};
            --o2:${Math.random()*0.5+0.5};
            animation-delay:${Math.random()*5}s;
        `;
        container.appendChild(star);
    }
}

/* ============================================
   HEADER FLOATING PARTICLES
   ============================================ */
function generateHeaderParticles() {
    const header = document.querySelector('header');
    if (!header) return;
    for (let i = 0; i < 15; i++) {
        const p = document.createElement('div');
        p.className = 'header-particle';
        const size = Math.random() * 6 + 2;
        p.style.cssText = `
            width:${size}px; height:${size}px;
            top:${Math.random()*100}%; left:${Math.random()*100}%;
            --dur:${Math.random()*4+3}s;
            --dx:${(Math.random()-0.5)*40}px;
            --dy:${(Math.random()-0.5)*30}px;
            --s:${Math.random()*0.5+0.8};
            animation-delay:${Math.random()*3}s;
            opacity:${Math.random()*0.4+0.1};
        `;
        header.appendChild(p);
    }
}

/* ============================================
   SCROLL REVEAL (IntersectionObserver)
   ============================================ */
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    if (!reveals.length) return;
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(el => observer.observe(el));
}

/* ============================================
   PARALLAX ON SCROLL
   ============================================ */
function initParallax() {
    // Parallax background has been replaced by a fixed background 
    // to ensure it stays evenly distributed across all chapters without breaking.
}

/* ============================================
   ACTIVE NAV HIGHLIGHT
   ============================================ */
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('bg-secondary', 'text-dark');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('bg-secondary', 'text-dark');
                    }
                });
            }
        });
    }, { threshold: 0.3 });
    sections.forEach(s => observer.observe(s));
}

/* ============================================
   INIT ALL ENHANCEMENTS
   ============================================ */
document.addEventListener('DOMContentLoaded', () => {
    generateStarfield();
    generateHeaderParticles();
    initScrollReveal();
    initParallax();
    initActiveNav();
});

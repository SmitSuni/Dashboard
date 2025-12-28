// ================================================================
// 🚀 EPIC DASHBOARD JAVASCRIPT
// Smit Alexander Suni Morales
// All Interactive Features & Animations
// ================================================================

console.log('%c🚀 Dashboard Épico de Smit Alexander Suni Morales', 'font-size: 24px; color: #00d4ff; font-weight: bold; text-shadow: 0 0 10px #00d4ff;');
console.log('%c¡Bienvenido a mi portfolio!', 'font-size: 16px; color: #00ff88;');

// ===========================
// GLOBAL VARIABLES
// ===========================
let particlesArray = [];
let animationId = null;
let isPageVisible = true;
const mouse = {
    x: null,
    y: null,
    radius: 150
};

// Performance constants
const PARTICLE_CONNECTION_DISTANCE = 100;
const SCROLL_THRESHOLD = 500;
const NAVBAR_SCROLL_THRESHOLD = 100;
const STATS_ANIMATION_DURATION = 2000;

// Detect if user prefers reduced motion
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// ===========================
// MAIN INITIALIZATION
// ===========================
document.addEventListener('DOMContentLoaded', function() {
    initParticles();
    initNavbar();
    initThemeToggle();
    initScrollToTop();
    initStatsCounters();
    initSkillBars();
    initGitHubAPI();
    init3DBuilding();
    initSmoothScroll();
    initIntersectionObserver();
    initProjectCards();
    initEasterEgg();

    console.log('%c⚡ Todas las funcionalidades cargadas exitosamente!', 'color: #00ff88; font-weight: bold;');
});

// ===========================
// PARTICLES BACKGROUND (OPTIMIZED)
// ===========================
function initParticles() {
    const canvas = document.getElementById('particlesCanvas');
    if (!canvas || prefersReducedMotion) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
        constructor() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 3 + 1;
            this.speedX = Math.random() * 1 - 0.5;
            this.speedY = Math.random() * 1 - 0.5;
            this.color = Math.random() > 0.5 ? '#00d4ff' : '#00ff88';
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            if (this.x > canvas.width || this.x < 0) {
                this.speedX *= -1;
            }
            if (this.y > canvas.height || this.y < 0) {
                this.speedY *= -1;
            }

            // Mouse interaction (only if mouse is active)
            if (mouse.x !== null && mouse.y !== null) {
                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distanceSquared = dx * dx + dy * dy;
                const radiusSquared = mouse.radius * mouse.radius;

                if (distanceSquared < radiusSquared) {
                    const distance = Math.sqrt(distanceSquared);
                    this.x -= dx / 20;
                    this.y -= dy / 20;
                }
            }
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function createParticles() {
        particlesArray = [];
        // Reduce particles on mobile for better performance
        const isMobile = window.innerWidth < 768;
        const densityFactor = isMobile ? 25000 : 15000;
        const numberOfParticles = Math.min(
            Math.floor((canvas.width * canvas.height) / densityFactor),
            isMobile ? 30 : 60
        );

        for (let i = 0; i < numberOfParticles; i++) {
            particlesArray.push(new Particle());
        }

        console.log(`%c✨ ${numberOfParticles} partículas creadas`, 'color: #00d4ff;');
    }

    function connectParticles() {
        // Optimized: Only check nearby particles using spatial partitioning concept
        const maxConnections = 3; // Limit connections per particle

        for (let a = 0; a < particlesArray.length; a++) {
            let connections = 0;

            // Only check next few particles instead of all (optimized)
            const checkLimit = Math.min(a + 10, particlesArray.length);

            for (let b = a + 1; b < checkLimit && connections < maxConnections; b++) {
                const dx = particlesArray[a].x - particlesArray[b].x;
                const dy = particlesArray[a].y - particlesArray[b].y;
                const distanceSquared = dx * dx + dy * dy;
                const maxDistanceSquared = PARTICLE_CONNECTION_DISTANCE * PARTICLE_CONNECTION_DISTANCE;

                if (distanceSquared < maxDistanceSquared) {
                    const distance = Math.sqrt(distanceSquared);
                    const opacity = 1 - distance / PARTICLE_CONNECTION_DISTANCE;
                    ctx.strokeStyle = `rgba(0, 212, 255, ${opacity})`;
                    ctx.lineWidth = 1;
                    ctx.beginPath();
                    ctx.moveTo(particlesArray[a].x, particlesArray[a].y);
                    ctx.lineTo(particlesArray[b].x, particlesArray[b].y);
                    ctx.stroke();
                    connections++;
                }
            }
        }
    }

    function animate() {
        // Only animate if page is visible
        if (!isPageVisible) {
            animationId = requestAnimationFrame(animate);
            return;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
        }

        connectParticles();
        animationId = requestAnimationFrame(animate);
    }

    createParticles();
    animate();

    // Debounce resize event for better performance
    let resizeTimeout;
    window.addEventListener('resize', function() {
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createParticles();
        }, 250);
    });

    window.addEventListener('mousemove', function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    });

    // Reset mouse position when leaving window
    window.addEventListener('mouseleave', function() {
        mouse.x = null;
        mouse.y = null;
    });
}

// ===========================
// PAGE VISIBILITY API - PAUSE ANIMATIONS WHEN TAB INACTIVE
// ===========================
document.addEventListener('visibilitychange', function() {
    isPageVisible = !document.hidden;
    if (isPageVisible) {
        console.log('%c👁️ Pestaña visible - animaciones activadas', 'color: #00ff88;');
    } else {
        console.log('%c💤 Pestaña oculta - animaciones pausadas', 'color: #9ca3af;');
    }
});

// ===========================
// NAVIGATION BAR
// ===========================
function initNavbar() {
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');
    const navHamburger = document.getElementById('nav-hamburger');
    const navMenu = document.getElementById('nav-menu');

    // Scroll effect with throttling for better performance
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        if (scrollTimeout) return;

        scrollTimeout = setTimeout(() => {
            if (window.scrollY > NAVBAR_SCROLL_THRESHOLD) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }

            // Active link based on scroll position
            updateActiveLink();
            scrollTimeout = null;
        }, 50);
    }, { passive: true });

    // Hamburger menu
    navHamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
        });
    });

    function updateActiveLink() {
        const sections = document.querySelectorAll('section[id], header[id], div[id]');
        const scrollPos = window.scrollY + 200;

        sections.forEach(section => {
            const top = section.offsetTop;
            const height = section.offsetHeight;
            const id = section.getAttribute('id');

            if (scrollPos >= top && scrollPos < top + height) {
                navLinks.forEach(link => link.classList.remove('active'));
                const activeLink = document.querySelector(`.nav-link[href="#${id}"]`);
                if (activeLink) activeLink.classList.add('active');
            }
        });
    }
}

// ===========================
// THEME TOGGLE (DARK / LIGHT)
// ===========================
function initThemeToggle() {
    const themeToggle = document.getElementById('theme-toggle');
    const html = document.documentElement;

    // Check for saved theme preference or default to 'dark'
    const currentTheme = localStorage.getItem('theme') || 'dark';
    html.setAttribute('data-theme', currentTheme);

    themeToggle.addEventListener('click', () => {
        const theme = html.getAttribute('data-theme');
        const newTheme = theme === 'dark' ? 'light' : 'dark';

        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);

        // Add animation
        themeToggle.style.transform = 'rotate(360deg)';
        setTimeout(() => {
            themeToggle.style.transform = '';
        }, 300);

        console.log(`%c🎨 Tema cambiado a: ${newTheme}`, 'color: #00d4ff;');
    });
}

// ===========================
// SCROLL TO TOP BUTTON
// ===========================
function initScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTop');

    let scrollBtnTimeout;
    window.addEventListener('scroll', () => {
        if (scrollBtnTimeout) return;

        scrollBtnTimeout = setTimeout(() => {
            if (window.scrollY > SCROLL_THRESHOLD) {
                scrollBtn.classList.add('visible');
            } else {
                scrollBtn.classList.remove('visible');
            }
            scrollBtnTimeout = null;
        }, 100);
    }, { passive: true });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: prefersReducedMotion ? 'auto' : 'smooth'
        });
    });
}

// ===========================
// ANIMATED STATS COUNTERS
// ===========================
function initStatsCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    let counted = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !counted) {
                counted = true;
                statNumbers.forEach(stat => {
                    animateCounter(stat);
                });
            }
        });
    }, { threshold: 0.5 });

    const statsSection = document.querySelector('.stats-section');
    if (statsSection) {
        observer.observe(statsSection);
    }

    function animateCounter(element) {
        if (prefersReducedMotion) {
            const target = parseInt(element.getAttribute('data-target'));
            element.textContent = target + '+';
            return;
        }

        const target = parseInt(element.getAttribute('data-target'));
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / STATS_ANIMATION_DURATION, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const current = Math.floor(easeOutQuart * target);

            if (progress < 1) {
                element.textContent = current;
                requestAnimationFrame(updateCounter);
            } else {
                element.textContent = target + '+';
            }
        }

        requestAnimationFrame(updateCounter);
    }
}

// ===========================
// SKILL PROGRESS BARS
// ===========================
function initSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    let animated = false;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animated) {
                animated = true;
                skillBars.forEach(bar => {
                    const progress = bar.getAttribute('data-progress');
                    setTimeout(() => {
                        bar.style.width = progress + '%';
                    }, 100);
                });
            }
        });
    }, { threshold: 0.3 });

    const skillsSection = document.querySelector('.skills-card');
    if (skillsSection) {
        observer.observe(skillsSection);
    }
}

// ===========================
// GITHUB API INTEGRATION (WITH CACHING)
// ===========================
async function initGitHubAPI() {
    const username = 'SmitSuni';
    const githubStatsContainer = document.getElementById('github-stats');
    const githubReposContainer = document.getElementById('github-repos');
    const CACHE_KEY = 'github_data_cache';
    const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds

    // Check cache first
    const cachedData = localStorage.getItem(CACHE_KEY);
    if (cachedData) {
        try {
            const { data, timestamp } = JSON.parse(cachedData);
            const age = Date.now() - timestamp;

            if (age < CACHE_DURATION) {
                console.log('%c📦 Usando datos de GitHub desde caché', 'color: #00ff88;');
                displayGitHubData(data.userData, data.reposData);
                return;
            }
        } catch (e) {
            // Invalid cache, continue to fetch
            localStorage.removeItem(CACHE_KEY);
        }
    }

    // Fetch with timeout
    async function fetchWithTimeout(url, timeout = 5000) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        try {
            const response = await fetch(url, { signal: controller.signal });
            clearTimeout(timeoutId);
            return response;
        } catch (error) {
            clearTimeout(timeoutId);
            throw error;
        }
    }

    try {
        // Fetch user data
        const userResponse = await fetchWithTimeout(`https://api.github.com/users/${username}`);
        const userData = await userResponse.json();

        // Fetch repos
        const reposResponse = await fetchWithTimeout(`https://api.github.com/users/${username}/repos?sort=updated&per_page=6`);
        const reposData = await reposResponse.json();

        // Cache the data
        localStorage.setItem(CACHE_KEY, JSON.stringify({
            data: { userData, reposData },
            timestamp: Date.now()
        }));

        displayGitHubData(userData, reposData);
        console.log('%c✅ Datos de GitHub cargados correctamente', 'color: #00ff88;');
    } catch (error) {
        console.error('Error loading GitHub data:', error);
        githubStatsContainer.innerHTML = `
            <div class="github-loading">
                <i class="fas fa-exclamation-triangle"></i>
                <p>No se pudieron cargar los datos de GitHub</p>
                <p style="font-size: 0.85rem; color: var(--text-muted);">Se alcanzó el límite de la API o hay problemas de conexión</p>
            </div>
        `;
    }

    function displayGitHubData(userData, reposData) {
        // Display stats
        githubStatsContainer.innerHTML = `
            <div class="github-stat-card">
                <i class="fab fa-github"></i>
                <div class="github-stat-value">${userData.public_repos}</div>
                <div class="github-stat-label">Repositorios</div>
            </div>
            <div class="github-stat-card">
                <i class="fas fa-users"></i>
                <div class="github-stat-value">${userData.followers}</div>
                <div class="github-stat-label">Seguidores</div>
            </div>
            <div class="github-stat-card">
                <i class="fas fa-user-plus"></i>
                <div class="github-stat-value">${userData.following}</div>
                <div class="github-stat-label">Siguiendo</div>
            </div>
            <div class="github-stat-card">
                <i class="fas fa-code-branch"></i>
                <div class="github-stat-value">${reposData.length}</div>
                <div class="github-stat-label">Proyectos Activos</div>
            </div>
        `;

        // Display repos with proper security attributes
        githubReposContainer.innerHTML = reposData.slice(0, 6).map(repo => `
            <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="github-repo-card">
                <div class="repo-name">
                    <i class="fas fa-folder"></i>
                    ${repo.name}
                </div>
                <div class="repo-description">${repo.description || 'Sin descripción'}</div>
                <div class="repo-stats">
                    ${repo.language ? `<span class="repo-stat"><i class="fas fa-circle"></i> ${repo.language}</span>` : ''}
                    <span class="repo-stat"><i class="fas fa-star"></i> ${repo.stargazers_count}</span>
                    <span class="repo-stat"><i class="fas fa-code-branch"></i> ${repo.forks_count}</span>
                </div>
            </a>
        `).join('');
    }
}

// ===========================
// 3D BUILDING INTERACTION
// ===========================
function init3DBuilding() {
    const building = document.querySelector('.building-3d');
    const buildingScene = document.querySelector('.building-scene');

    if (!building || !buildingScene) return;

    let isHovering = false;

    buildingScene.addEventListener('mouseenter', () => {
        isHovering = true;
    });

    buildingScene.addEventListener('mouseleave', () => {
        isHovering = false;
        building.style.animation = 'buildingFloat 6s ease-in-out infinite, buildingRotate 30s linear infinite';
    });

    buildingScene.addEventListener('mousemove', (e) => {
        if (!isHovering) return;

        const rect = buildingScene.getBoundingClientRect();
        const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
        const mouseY = (e.clientY - rect.top) / rect.height - 0.5;

        building.style.animation = 'none';
        building.style.transform = `
            rotateY(${mouseX * 60}deg)
            rotateX(${-mouseY * 30 + 10}deg)
        `;
    });
}

// ===========================
// SMOOTH SCROLL
// ===========================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: prefersReducedMotion ? 'auto' : 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// ===========================
// INTERSECTION OBSERVER FOR ANIMATIONS
// ===========================
function initIntersectionObserver() {
    const cards = document.querySelectorAll('.card, .timeline-item');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                    entry.target.classList.add('visible');
                }, index * 50);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// ===========================
// PROJECT CARDS INTERACTION
// ===========================
function initProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');

    projectCards.forEach(card => {
        card.addEventListener('click', function(e) {
            // Ripple effect
            const ripple = document.createElement('div');
            ripple.className = 'ripple';
            ripple.style.cssText = `
                position: absolute;
                border-radius: 50%;
                background: rgba(0, 212, 255, 0.5);
                width: 20px;
                height: 20px;
                animation: rippleEffect 0.6s ease-out;
                pointer-events: none;
            `;

            const rect = this.getBoundingClientRect();
            ripple.style.left = `${e.clientX - rect.left - 10}px`;
            ripple.style.top = `${e.clientY - rect.top - 10}px`;

            this.style.position = 'relative';
            this.appendChild(ripple);

            setTimeout(() => ripple.remove(), 600);
        });
    });

    // Add ripple animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes rippleEffect {
            from {
                transform: scale(0);
                opacity: 1;
            }
            to {
                transform: scale(20);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// ===========================
// EASTER EGG
// ===========================
function initEasterEgg() {
    let clickCount = 0;
    const profileImg = document.querySelector('.profile-img');

    if (profileImg) {
        profileImg.addEventListener('click', function() {
            clickCount++;

            if (clickCount === 5) {
                console.log('%c🎉 ¡EASTER EGG ENCONTRADO!', 'font-size: 28px; color: #00ff88; font-weight: bold;');
                console.log('%c"Para ganar hay que tener corazón" - Smit Alexander', 'font-size: 18px; color: #00d4ff; font-style: italic;');

                createConfetti();
                clickCount = 0;
            }
        });
    }
}

function createConfetti() {
    const colors = ['#00d4ff', '#00ff88', '#8b5cf6', '#06b6d4', '#ff6b35'];

    for (let i = 0; i < 100; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.style.cssText = `
                position: fixed;
                width: ${Math.random() * 10 + 5}px;
                height: ${Math.random() * 10 + 5}px;
                background: ${colors[Math.floor(Math.random() * colors.length)]};
                left: ${Math.random() * 100}%;
                top: -20px;
                border-radius: 50%;
                animation: fall ${2 + Math.random() * 3}s linear;
                pointer-events: none;
                z-index: 9999;
            `;

            document.body.appendChild(confetti);

            setTimeout(() => confetti.remove(), 5000);
        }, i * 30);
    }

    // Add fall animation
    if (!document.getElementById('confetti-style')) {
        const style = document.createElement('style');
        style.id = 'confetti-style';
        style.textContent = `
            @keyframes fall {
                to {
                    transform: translateY(100vh) rotate(${Math.random() * 360}deg);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
}

// ===========================
// PERFORMANCE MONITORING
// ===========================
window.addEventListener('load', () => {
    const loadTime = performance.now();
    console.log(`%c⚡ Dashboard cargado en ${loadTime.toFixed(2)}ms`, 'color: #00ff88; font-weight: bold; font-size: 14px;');

    // Performance memory is only available in Chrome/Edge
    if (performance.memory) {
        console.log(`%c📊 Memoria usada: ${(performance.memory.usedJSHeapSize / 1048576).toFixed(2)} MB`, 'color: #00d4ff;');
    }

    // Log performance metrics
    if (performance.getEntriesByType) {
        const paintMetrics = performance.getEntriesByType('paint');
        paintMetrics.forEach(metric => {
            console.log(`%c🎨 ${metric.name}: ${metric.startTime.toFixed(2)}ms`, 'color: #00d4ff;');
        });
    }
});

// ===========================
// KEYBOARD SHORTCUTS
// ===========================
document.addEventListener('keydown', (e) => {
    // Ctrl + K: Toggle theme
    if (e.ctrlKey && e.key === 'k') {
        e.preventDefault();
        document.getElementById('theme-toggle').click();
    }

    // Ctrl + ↑: Scroll to top
    if (e.ctrlKey && e.key === 'ArrowUp') {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
});

console.log('%c⌨️  Atajos de teclado:', 'color: #00d4ff; font-weight: bold;');
console.log('%cCtrl + K: Cambiar tema', 'color: #9ca3af;');
console.log('%cCtrl + ↑: Ir arriba', 'color: #9ca3af;');

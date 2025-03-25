// Custom cursor
const cursor = document.querySelector('.cursor');
document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

// Initialize Tilt.js
VanillaTilt.init(document.querySelectorAll("[data-tilt]"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.5,
});

// Typing animation
const typingText = document.querySelector('.typing-text');
const text = typingText.textContent;
typingText.textContent = '';
let i = 0;

function typeWriter() {
    if (i < text.length) {
        typingText.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}

// Start typing animation when element is in view
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            typeWriter();
            observer.unobserve(entry.target);
        }
    });
});

observer.observe(typingText);

// Particle effect
const particlesContainer = document.querySelector('.hero-particles');
for (let i = 0; i < 50; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.setProperty('--x', `${Math.random() * 100}%`);
    particle.style.setProperty('--y', `${Math.random() * 100}%`);
    particle.style.setProperty('--duration', `${Math.random() * 2 + 1}s`);
    particle.style.setProperty('--delay', `${Math.random() * 2}s`);
    particlesContainer.appendChild(particle);
}

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Glitch effect on hover for section titles
document.querySelectorAll('.section-title').forEach(title => {
    title.addEventListener('mouseover', () => {
        title.classList.add('glitch-active');
    });
    title.addEventListener('mouseout', () => {
        title.classList.remove('glitch-active');
    });
});

// Intersection Observer for fade-in animations
const fadeElements = document.querySelectorAll('.skill-card, .project-card');
const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            fadeObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.1
});

fadeElements.forEach(element => {
    fadeObserver.observe(element);
});

// Form submission animation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    form.classList.add('submitted');
    setTimeout(() => {
        form.reset();
        form.classList.remove('submitted');
    }, 2000);
});

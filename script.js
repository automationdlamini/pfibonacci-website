// Mobile Menu Toggle
document.querySelector('.menu-toggle').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.nav-links').classList.toggle('active');
});

// Fade-in Scroll Animation
const observerOptions = { threshold: 0.1 };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

document.querySelectorAll('section').forEach(section => {
    section.classList.add('hidden');
    observer.observe(section);
});

// Read More Toggle
const readMoreBtn = document.getElementById('read-more-btn');
const moreContent = document.getElementById('more-content');

if (readMoreBtn && moreContent) {
    readMoreBtn.addEventListener('click', () => {
        moreContent.classList.toggle('expanded');
        readMoreBtn.textContent = moreContent.classList.contains('expanded') ? 'Read Less' : 'Read More';
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        document.querySelector('.navbar').style.background = 'rgba(255, 255, 255, 0.98)';
    } else {
        document.querySelector('.navbar').style.background = 'rgba(255, 255, 255, 0.95)';
    }
});

// Form submission handling
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mesajınız gönderildi! En kısa sürede size dönüş yapacağız.');
    this.reset();
});

// Animation on scroll
window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('.product-card, .price-card');
    
    elements.forEach(element => {
        const position = element.getBoundingClientRect();
        
        if(position.top < window.innerHeight) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
});

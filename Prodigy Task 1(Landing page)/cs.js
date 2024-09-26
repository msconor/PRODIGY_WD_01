window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = '#333'; 
    } else {
        navbar.style.backgroundColor = 'transparent'; 
    }
});
document.querySelector('.logo').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav_links');
    navLinks.classList.toggle('show');
});
document.getElementById('contactForm').addEventListener('submit', function(event) {
event.preventDefault(); 
const formMessage = document.getElementById('formMessage');
formMessage.textContent = 'Message sent successfully!';
formMessage.style.color = 'green'; 
formMessage.style.fontSize = '18px';
formMessage.style.fontWeight = 'bold';
document.getElementById('contactForm').reset();
});

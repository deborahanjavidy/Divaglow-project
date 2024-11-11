const searchInput = document.querySelector('.search-bar');
searchInput.addEventListener('focus', () => {
   searchInput.classList.add('expanded');
});
searchInput.addEventListener('blur', () => {
   searchInput.classList.remove('expanded');
});
document.addEventListener("DOMContentLoaded", function() {
   // Animation pour les informations de contact
   const contactInfo = document.querySelectorAll('.info-item');
   contactInfo.forEach((item, index) => {
       item.style.opacity = 0;
       item.style.transform = 'translateY(20px)';
       item.style.animation = `fadeInUp 0.5s forwards`;
       item.style.animationDelay = `${index * 0.2}s`;
   });
});

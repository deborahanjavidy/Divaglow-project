const searchInput = document.querySelector('.search-bar');
searchInput.addEventListener('focus', () => {
   searchInput.classList.add('expanded');
});
searchInput.addEventListener('blur', () => {
   searchInput.classList.remove('expanded');
});

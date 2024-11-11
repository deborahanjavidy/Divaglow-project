// Logique de la barre de recherche
const searchInput = document.querySelector('.search-bar');

searchInput.addEventListener('focus', () => {
    searchInput.classList.add('expanded');
});

searchInput.addEventListener('blur', () => {
    searchInput.classList.remove('expanded');
});

// Logique du diaporama
let slideIndex = 1; // Initialise l'index de la diapositive
let autoSlide; // Variable pour l'intervalle de défilement automatique

// Fonction pour afficher les diapositives
function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");

    // Boucle de correction de l'index des diapositives
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }

    // Masquer toutes les diapositives et réinitialiser l'opacité
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        slides[i].style.opacity = 0;
    }

    // Supprimer la classe active de tous les indicateurs
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    // Afficher la diapositive active et lui appliquer une transition d'opacité
    slides[slideIndex - 1].style.display = "block";
    setTimeout(() => { slides[slideIndex - 1].style.opacity = 1; }, 50);
    dots[slideIndex - 1].className += " active";

    // Démarrer ou redémarrer le défilement automatique
    clearTimeout(autoSlide);
    autoSlide = setTimeout(() => { changeSlide(1); }, 3000); // Change d'image toutes les 3 secondes
}

// Fonction pour changer de diapositive avec boutons "Suivant" et "Précédent"
function changeSlide(n) {
    clearTimeout(autoSlide);
    showSlides(slideIndex += n);
}

// Fonction pour définir la diapositive actuelle via les indicateurs
function currentSlide(n) {
    clearTimeout(autoSlide);
    showSlides(slideIndex = n);
}

// Initialisation du diaporama au chargement de la page
showSlides(slideIndex);


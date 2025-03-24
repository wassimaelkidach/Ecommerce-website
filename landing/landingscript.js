// Fonction pour faire défiler vers la gauche
function scrollLeft() {
    const container = document.querySelector('.categories-container');
    if (container) {
        container.scrollTo({
            left: container.scrollLeft - 300,
            behavior: 'smooth'
        });
    }
}

// Fonction pour faire défiler vers la droite
function scrollRight() {
    const container = document.querySelector('.categories-container');
    if (container) {
        container.scrollBy({
            left: 300,
            behavior: 'smooth'
        });
    }
}
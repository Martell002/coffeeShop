document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const slider = document.querySelector('.slider');
    const cards = document.querySelectorAll('.card');
    const cardWidth = cards[0].offsetWidth;
    const visibleCards = 2;
    let currentIndex = 0;

    prevButton.addEventListener('click', function () {
        if (currentIndex > 0) {
            currentIndex--;
            updateSliderPosition();
        }
    });

    nextButton.addEventListener('click', function () {
        if (currentIndex < cards.length - visibleCards) {
            currentIndex++;
            updateSliderPosition();
        }
    });

    function updateSliderPosition() {
        const offset = -currentIndex * cardWidth;
        slider.style.transform = `translateX(${offset}px)`;
    }
});
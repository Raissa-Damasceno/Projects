document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section');
    const scrollUpButton = document.getElementById('scrollUp');
    const scrollDownButton = document.getElementById('scrollDown');

    let currentSectionIndex = 0;

    scrollUpButton.addEventListener('click', function() {
        if (currentSectionIndex > 0) {
            currentSectionIndex--;
            sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
        }
    });

    scrollDownButton.addEventListener('click', function() {
        if (currentSectionIndex < sections.length - 1) {
            currentSectionIndex++;
            sections[currentSectionIndex].scrollIntoView({ behavior: 'smooth' });
        }
    });
});

var button = document.getElementById('read-button');

button.addEventListener('click', function() {
    var card = document.querySelector('.project-card');
    card.classlist.toggle('active');

    if (card.classList.contains('active')) {
        return button.textContent = 'Read less';
    }

    button.textContent = 'Read more';
});
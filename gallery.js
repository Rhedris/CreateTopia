function openFullScreen(element) {
    var overlay = document.getElementById('fullscreen-overlay');
    var image = document.getElementById('fullscreen-image');

    overlay.style.display = 'flex';
    image.src = element.src;
}

function closeFullScreen() {
    var overlay = document.getElementById('fullscreen-overlay');

    overlay.style.display = 'none';
}




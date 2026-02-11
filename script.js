window.onload = function () {
    const pageFlip = new St.PageFlip(document.getElementById('book'), {
        width: 550, height: 750, size: "fixed", showCover: true
    });
    pageFlip.loadFromHTML(document.querySelectorAll('.page'));
    document.getElementById('book').style.visibility = 'visible';

    // Función para música y corazones al hacer clic
    document.addEventListener('click', function () {
        const music = document.getElementById('bg-music');
        music.play();
        createHeart();
    }, { once: true });

    // Generador de corazones
    setInterval(createHeart, 300);

    function createHeart() {
        const heart = document.createElement('div');
        heart.innerHTML = '❤️';
        heart.classList.add('heart-drop');
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        document.getElementById('hearts-container').appendChild(heart);
        setTimeout(() => heart.remove(), 5000);
    }
};
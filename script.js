function showLetter() {
    document.getElementById('love-letter').classList.toggle('show');
}
function showApology() {
    document.getElementById('apology').classList.toggle('show');
}
function showPopup() {
    document.getElementById('heart-popup').classList.toggle('show');
    setTimeout(() => { document.getElementById('heart-popup').classList.remove('show'); }, 5000);
}
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.innerHTML = '❤️';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 3 + 2 + 's';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
}
function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.innerHTML = '✨';
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.animationDuration = Math.random() * 2 + 1 + 's';
    document.body.appendChild(sparkle);
    setTimeout(() => sparkle.remove(), 2000);
}
setInterval(createHeart, 700);
setInterval(createSparkle, 900);
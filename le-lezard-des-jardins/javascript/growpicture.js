
// pour leffet photo agrandie
const thumbs = document.querySelectorAll('.thumb');
const overlay = document.getElementById('overlay');
const overlayImg = document.getElementById('overlayImg');

thumbs.forEach(img => {
  img.addEventListener('click', () => {
    overlay.style.display = 'flex';
    overlayImg.src = img.src;
  });
});

if (overlay != null) {
  overlay.addEventListener('click', () => {
    overlay.style.display = 'none';

  });
}



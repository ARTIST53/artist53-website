(() => {
  const icon = document.querySelector('.signature-footer-gold-mark');
  if (!icon) return;

  icon.src = 'artist53-mark-white.png?v=20260804-1845';
  icon.alt = 'ARTIST53 hand and pencil icon';
  icon.style.objectFit = 'contain';
  icon.style.filter = 'brightness(0) saturate(100%) invert(80%) sepia(98%) saturate(1222%) hue-rotate(345deg) brightness(104%) contrast(104%)';
})();

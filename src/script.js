const checkbox = document.getElementById('modoClaro');
checkbox.addEventListener('change', () => {
  document.body.classList.toggle('claro', checkbox.checked);
});

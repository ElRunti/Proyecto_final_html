const checkbox = document.getElementById('modoClaro');
checkbox.addEventListener('change', () => {
  document.documentElement.classList.toggle('claro', checkbox.checked);
});


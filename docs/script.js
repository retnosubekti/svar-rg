// Minimal script: set year and optional enhancements
document.addEventListener('DOMContentLoaded', function(){
  const y = new Date().getFullYear();
  const el = document.getElementById('year');
  if(el) el.textContent = y;

  // Placeholder: later bisa fetch daftar file dari GitHub API
  // contoh:
  // fetch('https://api.github.com/repos/retnosubekti/svar-rg/contents')
  //  .then(r=>r.json()).then(showFiles)
});

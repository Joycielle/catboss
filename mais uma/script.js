document.getElementById('formContato').addEventListener('submit', function(e) {
  e.preventDefault();
  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensagem = document.getElementById('mensagem').value.trim();

  if (!nome || !email || !mensagem) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  alert("Mensagem enviada com sucesso! Obrigado, " + nome + "!");
  this.reset();
  
window.addEventListener('load', () => {
  const track = document.getElementById('carouselTrack');
  // Clona os itens para que a animação pareça infinita
  track.innerHTML += track.innerHTML;
});

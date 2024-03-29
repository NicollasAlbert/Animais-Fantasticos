export default function initModal() {
  const botaoAbrir = document.querySelector('[data-modal="abrir-modal"]');
  const botaoFechar = document.querySelector('[data-modal="fechar-modal"]');
  const containerModal = document.querySelector('[data-modal="container"]');

  if (botaoAbrir && botaoFechar && containerModal) {
    function toggleModal(event) {
      event.preventDefault();
      containerModal.classList.toggle("ativo");
    }

    function cliqueForaModal(event) {
      if (event.target === this) 
      toggleModal(event);
    }

    botaoAbrir.addEventListener("click", toggleModal);

    botaoFechar.addEventListener("click", toggleModal);
    containerModal.addEventListener("click", cliqueForaModal);
  }
}

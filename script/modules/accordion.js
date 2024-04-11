const activeClass = "ativo";

export default function initAccordion() {
  const listaAccordion = document.querySelectorAll("[data-anime='accordion'] dt");

  function showAccordion() {
    this.classList.toggle(activeClass);
    this.nextElementSibling.classList.toggle(activeClass);
  }

  if (listaAccordion.length) {
    listaAccordion[0].classList.add(activeClass);
    listaAccordion[0].nextElementSibling.classList.add(activeClass);

    listaAccordion.forEach((item) => {
      item.addEventListener("click", showAccordion);
    });
  }
}

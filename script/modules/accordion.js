const activeClass = "ativo";

export default function initAccordion() {
  const listaAccordion = document.querySelectorAll("[data-anime='accordion'] dt");

  if (listaAccordion.length) {
    listaAccordion[0].classList.add(activeClass);
    listaAccordion[0].nextElementSibling.classList.add(activeClass);

    function showAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    listaAccordion.forEach((item) => {
      item.addEventListener("click", showAccordion);
    });
  }
}

initAccordion();
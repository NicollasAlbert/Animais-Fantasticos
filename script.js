function initTabNav() {
  const menu = document.querySelectorAll(".js-tabmenu li");
  const content = document.querySelectorAll(".js-tabcontent section");

  if (menu.length && content.length) {
    content[0].classList.add("ativo");

    function menuContent(index) {
      content.forEach((item) => {
        item.classList.remove("ativo");
      });
      content[index].classList.add("ativo");
    }

    menu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        menuContent(index);
      });
    });
  }
}

initTabNav();

function initAccordion() {
  const listaAccordion = document.querySelectorAll(".js-accordion dt");
  const activeClass = "ativo";

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

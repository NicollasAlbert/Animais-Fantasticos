const activeClass = "ativo";

export default function initTabNav() {
  const menu = document.querySelectorAll("[data-tab='menu'] li");
  const content = document.querySelectorAll('[data-tab="content"] section');

  if (menu.length && content.length) {
    content[0].classList.add(activeClass);

    function menuContent(index) {
      content.forEach((item) => {
        item.classList.remove(activeClass);
      });

      const direcao = content[index].dataset.anime;
      content[index].classList.add(activeClass, direcao);
    }

    menu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        menuContent(index);
      });
    });
  }
}

initTabNav();
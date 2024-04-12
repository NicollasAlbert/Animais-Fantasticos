export default class TabNav {
  constructor(menu, content) {
    this.menu = document.querySelectorAll(menu);
    this.content = document.querySelectorAll(content);

    this.activeClass = 'ativo';
  }

  menuContent(index) {
    this.content.forEach((item) => {
      item.classList.remove(this.activeClass);
    });

    const direcao = this.content[index].dataset.anime;
    this.content[index].classList.add(this.activeClass, direcao);
  }

  addTabNavEvent() {
    this.menu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => this.menuContent(index));
    });
  }

  init() {
    if (this.menu.length && this.content.length) {
      this.menuContent(0);
      this.addTabNavEvent();
    }
    return this;
  }
}

export default class Accordion {
  constructor(list) {
    this.listaAccordion = document.querySelectorAll(list);
    this.activeClass = 'ativo';
  }

  toggleAccordion(item) {
    item.classList.toggle(this.activeClass);
    item.nextElementSibling.classList.toggle(this.activeClass);
  }

  addAccordionEvent() {
    this.listaAccordion.forEach((item) => {
      item.addEventListener('click', () => this.toggleAccordion(item));
    });
  }

  init() {
    if (this.listaAccordion.length) {
      this.toggleAccordion(this.listaAccordion[0]);
      this.addAccordionEvent();
    }
    return this;
  }
}

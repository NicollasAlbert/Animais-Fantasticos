/* eslint-disable class-methods-use-this */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import outsideClick from './outsideclick.js';

export default class DropDownMenu {
  constructor(dropDownMenus, events) {
    this.dropDownMenus = document.querySelectorAll(dropDownMenus);
    if (events === undefined) {
      this.events = ['touchstart', 'click'];
    } else {
      this.events = events;
    }
    this.activeClass = 'ativo';
    this.activeDropdownMenu = this.activeDropdownMenu.bind(this);
  }

  activeDropdownMenu(event) {
    event.preventDefault();
    const element = event.currentTarget;
    element.classList.add(this.activeClass);
    outsideClick(element, this.events, () => {
      element.classList.remove(this.activeClass);
    });
  }

  addDropdownMenusEvent() {
    this.dropDownMenus.forEach((menu) => {
      this.events.forEach((userEvent) => {
        menu.addEventListener(userEvent, this.activeDropdownMenu);
      });
    });
  }

  init() {
    if (this.dropDownMenus.length) {
      this.addDropdownMenusEvent();
    }
    return this;
  }
}

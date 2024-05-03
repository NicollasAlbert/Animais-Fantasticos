export default class ScrollAnimado {
  constructor(sections) {
    this.sections = document.querySelectorAll(sections);
    this.windowsMetade = window.innerHeight * 0.5;
    this.animaScroll = this.animaScroll.bind(this);
  }

  getDistance() {
    this.sections.forEach(section => {
      const sectionTop = section.offsetTop;
    })
  }

  animaScroll() {
    this.sections.forEach((section) => {
      const sectionTop = section.getBoundingClientRect().top;
      const isSectionVisible = sectionTop - this.windowsMetade < 0;
      if (isSectionVisible) section.classList.add('ativo');
      else if (section.classList.contains('ativo')) {
        section.classList.remove('ativo');
      }
    });
  }

  init() {
    this.animaScroll();
    window.addEventListener("scroll", this.animaScroll);
  }

}

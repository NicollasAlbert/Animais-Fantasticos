export default class ScrollSmooth {
  constructor(links, options) {
    this.linksInternos = document.querySelectorAll(links);
    if (options === undefined) {
      this.options = { behavior: 'smooth', block: 'start' };
    } else {
      this.options = options;
    }

    this.slideSmooth = this.slideSmooth.bind(this);
  }

  slideSmooth(e) {
    e.preventDefault();
    const href = e.currentTarget.getAttribute('href');
    const section = document.querySelector(href);

    section.scrollIntoView(this.options);

    // forma alternativa
    // const topo = section.offsetTop;
    // scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }

  addLinkEvent() {
    this.linksInternos.forEach((link) => {
      link.addEventListener('click', this.slideSmooth);
    });
  }

  init() {
    if (this.linksInternos.length) {
      this.addLinkEvent();
    }
    return this;
  }
}

const activeClass = "ativo";

function initTabNav() {
  const menu = document.querySelectorAll(".js-tabmenu li");
  const content = document.querySelectorAll(".js-tabcontent section");

  if (menu.length && content.length) {
    content[0].classList.add(activeClass);

    function menuContent(index) {
      content.forEach((item) => {
        item.classList.remove(activeClass);
      });
      content[index].classList.add(activeClass);
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

function initScrollSmooth() {
  const linksInternos = document.querySelectorAll(".js-menu a[href^='#']");

  function slideSmooth(e) {
    e.preventDefault();
    const href = this.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    // forma alternativa
    // const topo = section.offsetTop;
    // scrollTo({
    //   top: topo,
    //   behavior: "smooth",
    // });
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", slideSmooth);
  });
}

initScrollSmooth();

function initScrollAnimado() {
  const sections = document.querySelectorAll(".js-scroll");
  const windowsMetade = window.innerHeight * 0.5;

  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowsMetade < 0;
        if (isSectionVisible) section.classList.add(activeClass);
        else section.classList.remove(activeClass);
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

initScrollAnimado();
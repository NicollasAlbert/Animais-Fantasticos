const activeClass = "ativo";

export default function initScrollAnimado() {
  const sections = document.querySelectorAll("[data-anime='scroll']");
  const windowsMetade = window.innerHeight * 0.5;

  if (sections.length) {
    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowsMetade < 0;
        if (isSectionVisible) 
        section.classList.add(activeClass);
        else if(section.classList.contains('ativo')) {
          section.classList.remove(activeClass);
        }
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}

initScrollAnimado();
export default function initScrollSmooth() {
  const linksInternos = document.querySelectorAll("[data-menu='suave'] a[href^='#']");

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

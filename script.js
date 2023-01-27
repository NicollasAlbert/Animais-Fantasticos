// Verifique a distância da primeira imagem
// em relação ao topo da página
const imgDistancia = document.querySelector("img");
console.log(imgDistancia.offsetTop);
const imgRect = imgDistancia.getBoundingClientRect().top;
console.log(imgRect);

// Retorne a soma da largura de todas as imagens
function somaImagens() {
  const imgSoma = document.querySelectorAll("img");
  let soma = 0;
  imgSoma.forEach(function (img) {
    const imgTotal = img.offsetWidth;
    soma += img.offsetWidth;
  });
  console.log(soma);
}

window.onload = function () {
  somaImagens();
};

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');
links.forEach((link) => {
  linkWidth = link.offsetWidth;
  linkHeight = link.offsetHeight;
  if(linkWidth >= 48 && linkHeight >= 48)
  console.log(link, 'Os links estão cumprindo o recomendado')
  else
  console.log(link, 'Os links não estão cumprindo o recomendado')
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const menor = matchMedia("(max-width: 720px)");
const menu = document.querySelector(".menu");

if (menor.matches) {
  menu.classList.add("menu-mobile");
}

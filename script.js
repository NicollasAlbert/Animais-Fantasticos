// Quando o usuário clicar nos links internos do site,
// adicione a classe ativo ao item clicado e remova dos
// demais itens caso eles possuam a mesma. Previna
// o comportamento padrão desses links
const links = document.querySelectorAll(".menu a[href^='#']");

links.forEach((link) => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    link.classList.toggle("ativo");
  });
});

// Selecione todos os elementos do site começando a partir do body,
// ao clique mostre exatamente quais elementos estão sendo clicados
const body = document.querySelectorAll("body *");

function aoClicar(e) {
  const evento = e.target;
  console.log(evento);
}

body.forEach((itens) => {
  itens.addEventListener("click", aoClicar);
});

// Utilizando o código anterior, ao invés de mostrar no console,
// remova o elemento que está sendo clicado, o método remove() remove um elemento

// Se o usuário clicar na tecla (t), aumente todo o texto do site.

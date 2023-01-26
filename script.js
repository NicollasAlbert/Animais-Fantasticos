// Adicione a classe ativo a todos os itens do menu
const ativar = document.querySelectorAll('.menu a');
ativar.forEach((item) => item.classList.add('ativo'));

// Remove a classe ativo de todos os itens do menu e mantenha apenas no primeiro
ativar.forEach((item) => item.classList.remove('ativo'));
ativar[0].classList.add('ativo');

// Verifique se as imagens possuem o atributo alt
const imgs = document.querySelectorAll('img');
imgs.forEach((img) => {
  const possuiAtributo = img.hasAttribute('Alt');
  console.log(img, possuiAtributo);
});
// Modifique o href do link externo no menu
const href = document.querySelector('a[href^="http"]')
href.setAttribute('href', 'https://nicollasalbert.github.io');
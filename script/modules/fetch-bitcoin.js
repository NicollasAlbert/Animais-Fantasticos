export default function initFetchBitcoin() {

  fetch('https://blockchain.info/ticker')
  .then(r => r.json())
  .then(json => {
    const btcPreco = document.querySelector('.btc-preco');
    btcPreco.innerText = (1000 / json.BRL.sell).toFixed(4);
  }).catch(erro => {
    console.log(Error(erro));
  })

}

export default class initAnimaNumeros {
  constructor(numeros, observeTarget, observerClass) {
    this.numeros = document.querySelectorAll(numeros);
    this.observeTarget = document.querySelector(observeTarget);
    this.observerClass = observerClass;
    this.handleMutation.bind(this);
  }

  static incrementarNumero(numero) {
    const total = +numero.innerText;
      const incremento = Math.floor(total / 100);

      let start = 0;
      const timer = setInterval(() => {
        start += incremento;
        numero.innerText = start;
        if (start > total) {
          numero.innerText = total;
          clearInterval(timer);
        }
      },25 * Math.random())
  }
  
  animaNumeros() {

    this.numeros.forEach(numero => this.constructor.incrementarNumero(numero))

  }

  handleMutation(mutation) {
    if (mutation[0].target.classList.contains(observerClass)) {
      this.observer.disconnect();
      this.animaNumeros();
    }
  }

  addMutationObserver() {
    this.observer = new MutationObserver(this.handleMutation);
    observer.observe(this.observeTarget, {attributes: true});
  } 
  
  init() {
    if(this.numeros.length && this.observeTarget) {
    this.addMutationObserver();
    }
    return this;
  }
}

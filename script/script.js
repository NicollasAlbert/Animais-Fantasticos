/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/extensions */
import ScrollSmooth from './modules/scroll-suave.js';
import ScrollAnimado from './modules/scroll-animacao.js';
import Accordion from './modules/accordion.js';
import TabNav from './modules/tabnav.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import DropDownMenu from './modules/dropdown-menu.js';
import MenuMobile from './modules/menu-mobile.js';
import initFuncionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';

const scrollSuave = new ScrollSmooth('[data-menu="suave"] a[href^="#"]');
scrollSuave.init();

const accordion = new Accordion('[data-anime="accordion"] dt');
accordion.init();

const tabNav = new TabNav("[data-tab='menu'] li", '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir-modal"]', '[data-modal="fechar-modal"]', '[data-modal="container"]');
modal.init();

const tooltip = new Tooltip('[data-tooltip]');
tooltip.init();

const scrollAnimado = new ScrollAnimado("[data-anime='scroll']");
scrollAnimado.init();

const dropdownMenu = new DropDownMenu('[data-dropdown]');
dropdownMenu.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

initFuncionamento();

fetchAnimais('../../animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');

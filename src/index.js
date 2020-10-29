import './styles.css';
import './js/toggle.js';
import products from './templates/gallery-items.hbs';
import items from './menu.json';

const markup = products(items);

const ulRef = document.querySelector('.js-menu');
ulRef.insertAdjacentHTML('beforeend', markup);

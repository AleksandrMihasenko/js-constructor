import { model } from './model';
import './styles/style.css';

// $ - DOM element
const $site = document.querySelector('#site');

model.forEach(block => {
    $site.insertAdjacentHTML('beforeend', block.toHTML());
});



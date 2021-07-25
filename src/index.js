import menuTemplate from './template/template.hbs';
import menu from './data/menu.json';
const menuMarkup = menuTemplate(menu);
const menuRef = document.querySelector('.js-menu');
menuRef.insertAdjacentHTML('beforeend', menuMarkup);

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

const inputRef = document.querySelector('#theme-switch-toggle');
inputRef.addEventListener('change', event => {
  if (event.target.checked) {
    replaceClassOnTheme(DARK, LIGHT);
  } else {
    replaceClassOnTheme(LIGHT, DARK);
  }
});

function replaceClassOnTheme(classAdd, classRemove) {
  document.body.classList.add(classAdd);
  document.body.classList.remove(classRemove);
  localStorage.setItem('theme', classAdd);
}

if (localStorage.getItem('theme') === DARK) {
  document.body.classList.add(DARK);
  inputRef.checked = true;
} else {
  document.body.classList.add(LIGHT);
}

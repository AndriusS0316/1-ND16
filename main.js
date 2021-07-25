// sesiolikta uzduotis

const menu = [
  { href: './', title: 'Home' },
  { href: './services', title: 'Services' },
  { href: './about-us', title: 'About us' },
  { href: './contact-us', title: 'Contact us' },
];

function renderNav(selector, data) {
  // your code goes here
}

renderNav('header', menu);
PAPILDOMI KOMENTARAI:
Skirtingi budai iterpti nauja HTML turini

// selector = 'header'
const DOM = document.querySelector(selector);

// pirmas budas
DOM.innerHTML = DOM.innerHTML + HTML;

// supaprastintas antras budas
DOM.innerHTML += HTML;

// trecias budas
DOM.insertAdjacentHTML('beforeend', HTML);

// ketvirtas budas
const logoDOM = DOM.querySelector('.logo');
logoDOM.insertAdjacentHTML('afterend', HTML);
Skirtingi ciklai generuoti ta pati HTML turini

// iprastas for ciklas
for (let i = 0; i < data.length; i++) {
  const menuItem = data[i];
  HTML += `<a href="${menuItem.href}">${menuItem.title}</a>`;
}

// for-in
for (const i in data) {
  const menuItem = data[i];
  HTML += `<a href="${menuItem.href}">${menuItem.title}</a>`;
}

// for-of
for (const menuItem of data) {
  HTML += `<a href="${menuItem.href}">${menuItem.title}</a>`;
}

// forEach
data.forEach((menuItem) => {
  HTML += `<a href="${menuItem.href}">${menuItem.title}</a>`;
});

// while
let i = 0;
while (i < data.length) {
  const menuItem = data[i];
  HTML += `<a href="${menuItem.href}">${menuItem.title}</a>`;
  i++;
}
Galimos elementu paieskos, kai duodami skirtingi selector'iai pagal ju "tipus"

// jei duodamas html tag pavadinimas
const selector = 'header';
const DOM = document.getElementsByTagName(selector);
DOM[0].insertAdjacentHTML('beforeend', `<nav>${HTML}</nav>`);

// jei duodama css klase (butinai tik viena ji ir ne kitaip)
const selector = 'header';
const DOM = document.getElementsByClassName(selector);
DOM[0].insertAdjacentHTML('beforeend', `<nav>${HTML}</nav>`);

// jei duodamas id (imanomas tik vienas)
const selector = 'header';
const DOM = document.getElementById(selector);
DOM.insertAdjacentHTML('beforeend', `<nav>${HTML}</nav>`);

// jei duodamas bet koks selector'ius, bet atitinkantis CSS selector'iu taisykles
const selector = 'header';
const DOM = document.querySelector(selector);
DOM.insertAdjacentHTML('beforeend', `<nav>${HTML}</nav>`);

// jei duodamas bet koks selector'ius, bet atitinkantis CSS selector'iu taisykles
const selector = 'header';
const DOM = document.querySelectorAll(selector);
DOM[0].insertAdjacentHTML('beforeend', `<nav>${HTML}</nav>`);
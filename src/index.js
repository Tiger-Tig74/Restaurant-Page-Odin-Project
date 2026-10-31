import './styles.css';
import loadHome from './home.js';
import loadMenu from './menu.js';
import loadContact from './contact.js';

const content = document.getElementById('content');

const buttons = {
    home: document.getElementById('home-btn'),
    menu: document.getElementById('menu-btn'),
    contact: document.getElementById('contact-btn'),
};

function clearContent() {
    content.textContent = '';
}

function setActiveButton(activeButton) {
    Object.values(buttons).forEach((btn) => btn.classList.remove('active'));
    activeButton.classList.add('active');
}

function switchTab(loadFunction, button) {
    clearContent();
    loadFunction();
    setActiveButton(button);
}

buttons.home.addEventListener('click', () => switchTab(loadHome, buttons.home));
buttons.menu.addEventListener('click', () => switchTab(loadMenu, buttons.menu));
buttons.contact.addEventListener('click', () => switchTab(loadContact, buttons.contact));

loadHome();
setActiveButton(buttons.home);
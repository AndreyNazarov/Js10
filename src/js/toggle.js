const switchInputRef = document.querySelector('.js-switch-input');
const bodyElementRef = document.querySelector('body');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

let current = JSON.parse(localStorage.getItem('currentTheme'));

const checkReceivedTheme = () => {
  if (current === Theme.LIGHT) {
    bodyElementRef.classList.add('light-theme');
    localStorage.setItem('currentTheme', JSON.stringify(current));
    switchInputRef.removeAttribute('checked');
  } else if (current === Theme.DARK) {
    switchInputRef.setAttribute('checked', 'true');
    bodyElementRef.classList.add('dark-theme');
    localStorage.setItem('currentTheme', JSON.stringify(current));
  }
   else {
    bodyElementRef.classList.add('light-theme');
    current = Theme.LIGHT;
  }
};

const changeTheme = () => {
  if (current === Theme.LIGHT) {
    current = Theme.DARK;
    localStorage.setItem('currentTheme', JSON.stringify(current));
    bodyElementRef.classList.replace('light-theme', 'dark-theme');
  } else {
    current = Theme.LIGHT;
    localStorage.setItem('currentTheme', JSON.stringify(current));
    bodyElementRef.classList.replace('dark-theme', 'light-theme');
  }
};

checkReceivedTheme();

switchInputRef.addEventListener('change', changeTheme);



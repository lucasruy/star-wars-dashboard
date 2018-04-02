const saveChoice = () => {
  const themeButton = document.querySelector('.navigation__mode');

  const makeStorage = () => {
    const bodyElement = document.body;

    if (bodyElement.classList.contains('dark-theme')) {
      localStorage.setItem('themeStatus', 'dark');
    } else {
      localStorage.setItem('themeStatus', 'light');
    }
  };
  const checkStorage = () => {
    const themeStatus = localStorage.getItem('themeStatus');

    if (themeStatus === 'dark') {
      document.body.classList.add('dark-theme');
    } else if (themeStatus === 'light') {
      document.body.classList.remove('dark-theme');
    }
  };

  themeButton.addEventListener('click', makeStorage, false);
  document.addEventListener('DOMContentLoaded', checkStorage, false);
};

export default saveChoice;

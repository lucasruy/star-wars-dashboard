const setActive = () => {
  const bodyElement = document.querySelector('body');
  const darkButton = document.querySelector('.navigation__mode');

  const enableMode = () => {
    bodyElement.classList.toggle('dark-theme');
  };

  darkButton.addEventListener('click', enableMode, false);
};

export default setActive;

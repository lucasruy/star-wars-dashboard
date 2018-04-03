import enableSearch from './enableSearch';

const searchPearson = () => {
  const searchField = document.querySelector('.field');
  const searchButton = document.querySelector('.button--search');
  const pearsonCard = document.querySelector('.banner__result__item');
  const title = document.querySelector('.banner__result__title');

  const setSearch = () => {
    title.textContent = 'Search result: ';
    pearsonCard.classList.add('is-searching');
    enableSearch(searchField.value, pearsonCard);
  };

  searchField.addEventListener('keydown', (e) => {
    if (e.keyCode === 13 && searchField.value !== '') {
      setSearch();
    }
  }, false);
  searchButton.addEventListener('click', () => {
    if (searchField.value !== '') {
      setSearch();
    }
  }, false);

  enableSearch(4, pearsonCard);
};

export default searchPearson;

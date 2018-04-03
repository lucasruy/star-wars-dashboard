import enableSearch from './enableSearch';

const searchPearson = () => {
  const searchField = document.querySelector('.field');
  const pearsonCard = document.querySelector('.banner__result__item');
  const title = document.querySelector('.banner__result__title');
  searchField.addEventListener('keydown', (e) => {
    if (e.keyCode === 13) {
      title.textContent = 'Search result: ';
      pearsonCard.classList.add('is-searching');
      enableSearch(searchField.value, pearsonCard);
    }
  }, false);

  enableSearch(4, pearsonCard);
};

export default searchPearson;

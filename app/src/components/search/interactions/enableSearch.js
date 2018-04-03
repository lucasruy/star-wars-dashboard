import getURL from './getURL';
import makeCard from './makeCard';

const enableSearch = (id, itemWrapper) => {
  const dataValues = getURL(`https://swapi.co/api/people/${id}/?format=json`);
  const pearsonInfos = itemWrapper.querySelector('.banner__result__item .result-item');

  dataValues.then((response) => {
    pearsonInfos.innerHTML = makeCard(response);
    itemWrapper.classList.remove('is-searching');
  });
};

export default enableSearch;

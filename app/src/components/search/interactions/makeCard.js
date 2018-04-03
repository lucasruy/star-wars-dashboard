/* eslint-disable */
const makeCard = (pearsonInfos) => {
  const { name, height, mass, hair_color, birth_year, gender } = pearsonInfos;

  return `
    <h4 class="result-item__name">${name}</h4>
    <div class="result-item__infos">
      <p class="result-item__infos__item">Height:<span>${height}</span></p>
      <p class="result-item__infos__item">Mass:<span>${mass}</span></p>
      <p class="result-item__infos__item">Hair color:<span>${hair_color}</span></p>
      <p class="result-item__infos__item">Birth Year:<span>${birth_year}</span></p>
      <p class="result-item__infos__item">Gender:<span>${gender}</span></p>
    </div>
  `;
};

export default makeCard;

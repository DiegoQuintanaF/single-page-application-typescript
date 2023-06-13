import searchCats from '../api/searchCats.model';
import isFavorite from './isFavorite.service';
import toggleAddDelete from './toggleAddDelete.service';

const createCard = (catId: searchCats['id'], catUrl: searchCats['url']) => {
  const cardContainer: HTMLDivElement = document.createElement('div');
  cardContainer.classList.add('card-container');
  cardContainer.id = `${catId}`;

  const figureContainer: HTMLElement = document.createElement('figure');
  figureContainer.classList.add('card-img-container');

  const img: HTMLImageElement = document.createElement('img');
  img.classList.add('card-img');
  img.src = catUrl;
  img.alt = 'Mishi image';

  const btnContainer: HTMLDivElement = document.createElement('div');
  btnContainer.classList.add('card-btn-container');

  const btn: HTMLButtonElement = document.createElement('button');
  btn.classList.add('card-btn');
  btn.id = `btn-${catId}`;

  if (isFavorite(catId)) {
    btn.classList.add('inDelete');
    btn.classList.add('card-btn--delete');
    btn.innerText = 'Delete of Favorites';
  } else btn.innerText = 'Add to Favorites';

  btnContainer.appendChild(btn);
  figureContainer.appendChild(img);
  cardContainer.append(figureContainer, btnContainer);

  btn.addEventListener('click', toggleAddDelete(btn, catId, catUrl));
  return cardContainer;
};

export default createCard;

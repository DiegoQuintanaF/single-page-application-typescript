import createCard from '../utils/createCard.service';

const Favorites = async (content: HTMLDivElement) => {
  content.innerHTML = '';

  const mainTittle = document.querySelector<HTMLHeadingElement>('.main__title');
  mainTittle && (mainTittle.innerText = 'Favorites Michies');

  const btnSig = document.querySelector<HTMLButtonElement>('#sig-btn');
  btnSig && btnSig.classList.toggle('display-none');

  const favoritesMichis = localStorage.getItem('favoritesMichis');

  if (favoritesMichis && favoritesMichis !== '{}') {
    const savedMichis = JSON.parse(favoritesMichis);
    const favoriteCards: HTMLDivElement[] = [];

    for (const key in savedMichis) {
      const card = createCard(key, savedMichis[key]);
      favoriteCards.push(card);
    }
    content.append(...favoriteCards);

    return;
  }

  // content.innerText = 'Hola.';
};

export default Favorites;

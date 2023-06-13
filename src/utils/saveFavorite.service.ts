const saveFavoriteCat = (catId: string, catUrl: string) => {
  console.log('hola');
  const favoritesMichis = localStorage.getItem(`favoritesMichis`);

  const card = document.getElementById(catId) as HTMLDivElement;
  card!.classList.toggle('deleting');

  const btnFav = document.querySelector<HTMLButtonElement>(`#btn-${catId}`);
  btnFav?.classList.toggle('card-btn--blue');
  btnFav!.innerText = 'Adding to favorites...';
  btnFav!.disabled = true;

  console.log('Antes de agregar:', catId);
  if (favoritesMichis) {
    const savedMichis = JSON.parse(favoritesMichis);
    savedMichis[catId] = catUrl;
    localStorage.setItem('favoritesMichis', JSON.stringify(savedMichis));
  } else {
    const savedMichis = `{"${catId}": "${catUrl}"}`;
    localStorage.setItem('favoritesMichis', savedMichis);
  }
  console.log('Luego de ingresar:', catId);
  console.log('--->', localStorage.getItem('favoritesMichis'));
  setTimeout(() => {
    document.getElementById(catId)?.remove();
    const cardSkeleton = document.createElement('div');
    cardSkeleton.classList.add('skeleton');
    document.querySelector('#app')?.append(cardSkeleton);
  }, 1000);
};

export default saveFavoriteCat;

const deleteFavorite = (catId: string) => {
  const favoritesMichis = localStorage.getItem('favoritesMichis');

  const card = document.getElementById(catId);
  card!.classList.toggle(`deleting`);

  const btnDel: HTMLButtonElement | null = document.querySelector(
    `#btn-${catId}`
  );
  btnDel!.classList.toggle(`card-btn--blue`);
  btnDel!.innerText = 'Deleting of favorites...';
  btnDel!.disabled = true;

  if (favoritesMichis) {
    const savedMichis = JSON.parse(favoritesMichis);
    if (savedMichis.hasOwnProperty(catId)) {
      delete savedMichis[catId];
    }
    localStorage.setItem('favoritesMichis', JSON.stringify(savedMichis));

    setTimeout(() => {
      document.getElementById(catId)?.remove();
    }, 1000);
  }
};
``;
export default deleteFavorite;

import deleteFavorite from './deleteFavorite.service';
import saveFavoriteCat from './saveFavorite.service';

const toggleAddDelete = (
  btn: HTMLButtonElement,
  catId: string,
  catUrl: string
) => {
  return () => {
    if (btn.classList.contains('inDelete')) {
      return deleteFavorite(catId);
    } else {
      return saveFavoriteCat(catId, catUrl);
    }
  };
};

export default toggleAddDelete;

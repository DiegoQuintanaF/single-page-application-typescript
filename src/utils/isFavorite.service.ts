const isFavorite = (catId: string): boolean => {
  const savedCats = localStorage.getItem('favoritesMichis');

  if (savedCats) {
    const structureCats: object = JSON.parse(savedCats);
    return structureCats.hasOwnProperty(catId);
  }

  return false;
};

export default isFavorite;

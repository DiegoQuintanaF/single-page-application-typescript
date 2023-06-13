import searchCats from '../api/searchCats.model';
import getData from '../api/api.service';
import URI from '../api/uri.model';
import createCard from '../utils/createCard.service';
import getHash from '../utils/getHash.service';

const Home = async (content: HTMLDivElement) => {
  const cats: searchCats[] = await getData(URI.SEARCH);

  const cardsList: HTMLDivElement[] = cats.map((cat) => {
    return createCard(cat.id, cat.url);
  });

  if (getHash() === '/') {
    content.innerHTML = '';
    content.append(...cardsList);
  }
};

export default Home;

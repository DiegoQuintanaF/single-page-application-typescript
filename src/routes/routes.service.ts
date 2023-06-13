import Routes from './routes.model';
import getHash from '../utils/getHash.service';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import resolveRoutes from '../utils/resolveRoutes';

const routes: Routes = {
  '/': Home,
  favorites: Favorites,
};

const router = async () => {
  const content = document.querySelector<HTMLDivElement>('#app');
  content!.innerHTML = `<div class="skeleton card-container"></div>`.repeat(8);

  const hash = getHash();
  const route = resolveRoutes(hash);
  const render = routes[route];

  render(content!);
};

export default router;

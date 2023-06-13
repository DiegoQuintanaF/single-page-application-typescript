import './styles/style.css';
import router from './routes/routes.service';
// import saveFavoriteCat from './utils/saveFavorite.service';

const sigButtom = document.querySelector<HTMLButtonElement>('#sig-btn')

addEventListener('load', router);
addEventListener('hashchange', router);
sigButtom?.addEventListener('click', router);


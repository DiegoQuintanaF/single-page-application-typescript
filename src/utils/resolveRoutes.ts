import Hash from './hash.model';

const resolveRoutes = (route: Hash): Hash => {
  return route === '/' ? route : 'favorites';
};

export default resolveRoutes;

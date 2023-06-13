import searchCats from './searchCats.model';
import URI from './uri.model';
import API from './api.model';

const getData = async (URI: URI): Promise<searchCats[]> => {
  const response = await fetch(`${API.URL_BASE}${URI}`, {
    method: 'GET',
    headers: {
      'X-API-KEY': API.KEY,
    },
  });
  return await response.json();
};

export default getData;

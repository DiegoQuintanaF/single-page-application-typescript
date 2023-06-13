import Hash from './hash.model';

const getHash = (): Hash => {
  const hash: Hash = location.hash.slice(1).toLocaleLowerCase().split('/')[1]
    ? 'favorites'
    : '/';
  return hash;
};

export default getHash;

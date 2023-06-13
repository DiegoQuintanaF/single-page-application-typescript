interface Routes {
  '/': (content: HTMLDivElement) => Promise<void>;
  favorites: (content: HTMLDivElement) => Promise<void>;
}

export default Routes;

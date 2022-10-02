module.exports = {
  '*.{js,jsx}': ['npm run prettier:check', 'npm run lint:eslint'],
  '*.{ts,tsx}': () => ['npm run prettier:check', 'npm run lint'],
};

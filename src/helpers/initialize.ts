export const initialize = () => {
  const loadingDiv = document.getElementById('loading-screen');
  if (loadingDiv) {
    loadingDiv.remove();
  }
};

// write code to add / remove from the local storage

export const getLocalStorage = () => {
  return JSON.parse(localStorage.getItem('personalDiary')) || [];
};

export const addToLocalStorage = (newItem) => {
  const updatedLocalStorage = [...getLocalStorage(), newItem];
  localStorage.setItem('personalDiary', JSON.stringify(updatedLocalStorage));
};

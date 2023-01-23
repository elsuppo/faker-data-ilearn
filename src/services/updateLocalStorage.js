const updateLocalStorage = (lang, seed, valueError) => {
  localStorage.setItem('lang', lang);
  localStorage.setItem('seed', seed);
  localStorage.setItem('valueError', valueError);
}

export default updateLocalStorage;
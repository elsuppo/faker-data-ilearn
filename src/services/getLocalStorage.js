
const getLocalStorage = () => {
  const initialLang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
  const initialValueError = localStorage.getItem('valueError') ? localStorage.getItem('valueError') : 0;
  const initialSeed = localStorage.getItem('seed') ? localStorage.getItem('seed') : 0;
  return {initialLang, initialValueError, initialSeed}
}

export default getLocalStorage;
import { useState, useEffect } from 'react';
import { Container, Stack } from '@mui/material';

import PersonTable from './components/person-table';
import Toolbar from './components/toolbar/toolbar';
import Footer from './components/footer';

import getLocalStorage from './services/getLocalStorage';
import updateLocalStorage from './services/updateLocalStorage';
import getData from './services/getData';

function App() {

  const { initialLang, initialValueError, initialSeed } = getLocalStorage();

  const [lang, setLang] = useState(initialLang);
  const [valueError, setValueError] = useState(+initialValueError);
  const [seed, setSeed] = useState(+initialSeed);
  let [personCount, setPersonCount] = useState(20);

  useEffect(() => {
    updateLocalStorage(lang, seed, valueError);
    setPersonCount(20);

    window.addEventListener('scroll', function () {
      let windowRelativeBottom = document.documentElement.getBoundingClientRect().bottom;
      let clientHeight = document.documentElement.clientHeight
      if (windowRelativeBottom < clientHeight + 100) {
        setPersonCount((prevCount) => prevCount + 10)
      }
    });

  }, [lang, seed, valueError])

  let persons = [];
  persons = getData(seed, lang, persons, personCount, valueError);

  return (
    <Container maxWidth="lg">
      <Stack alignItems="center" spacing={2} mt={2}>
        <Toolbar
          lang={lang}
          valueError={valueError}
          seed={seed}
          setLang={setLang}
          setValueError={setValueError}
          setSeed={setSeed} />
        <PersonTable
          lang={lang}
          persons={persons} />
      </Stack>
      <Footer persons={persons}/>
    </Container>

  );
}

export default App;
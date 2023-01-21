import { useState, useEffect } from 'react';
import { Stack } from 'react-bootstrap';

import DropdownLang from './toolbar/dropdown-lang';
import ControlsValueError from './toolbar/controls-value-error';
import ControlsSeed from './toolbar/controls-seed';

const Toolbar = () => {
  const initialLang = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en';
  const initialValueError = localStorage.getItem('valueError') ? localStorage.getItem('valueError') : 0;

  const [lang, setLang] = useState(initialLang),
    [valueError, setValueError] = useState(initialValueError);

  useEffect(() => {
    localStorage.setItem('lang', lang);
    localStorage.setItem('valueError', valueError);
  }, [lang, valueError]);

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'lang':
        setLang(event.target.value);
        break;
      case 'valueError':
        event.target.value > 1000 ? setValueError(1000) : setValueError(event.target.value);
        break;
      // no default
    }
  }

  return (
    <Stack direction="horizontal" gap={5}>
      <DropdownLang lang={lang} handleChange={handleChange} />
      <ControlsValueError valueError={valueError} handleChange={handleChange}/>
      <ControlsSeed />
    </Stack>
  )
}

export default Toolbar;
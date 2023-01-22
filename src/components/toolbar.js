import { useState, useEffect } from 'react';
import { Stack, Divider } from '@mui/material';

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
    <Stack
      direction={{ xs: 'column', sm: 'row' }}
      alignItems="center"
      justifyContent="space-between"
      spacing={{ xs: 1, sm: 5 }}
      divider={<Divider orientation="vertical" flexItem />}
    >
      <DropdownLang
        lang={lang}
        handleChange={handleChange}
      />
      <ControlsValueError
        valueError={valueError}
        handleChange={handleChange}
      />
      <ControlsSeed />
    </Stack>
  )
}

export default Toolbar;
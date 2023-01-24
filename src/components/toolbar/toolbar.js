import { Stack, Divider } from '@mui/material';

import DropdownLang from './dropdown-lang';
import ControlsValueError from './controls-value-error';
import ControlsSeed from './controls-seed';

const Toolbar = ({lang, valueError, setLang, setValueError, seed, setSeed}) => {

  const handleChange = (event) => {
    switch (event.target.name) {
      case 'lang':
        setLang(event.target.value);
        break;
      case 'valueError':
        event.target.value > 1000 ? setValueError(1000) : setValueError(+event.target.value);
        break;
      case 'valueSeed':
        setSeed(+event.target.value);
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
      <ControlsSeed
        seed={seed}
        setSeed={setSeed}
        handleChange={handleChange}/>
    </Stack>
  )
}

export default Toolbar;
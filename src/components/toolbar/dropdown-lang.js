import { Select, FormControl, MenuItem } from '@mui/material';

const DropdownLang = ({lang, handleChange}) => {

  return (
    <FormControl>
    <Select
      value={lang}
      name="lang"
      onChange={handleChange}
      style={{width: '120px'}}
    >
      <MenuItem value={'en'}>English</MenuItem>
      <MenuItem value={'de'}>German</MenuItem>
      <MenuItem value={'es'}>Spanish</MenuItem>
      <MenuItem value={'ge'}>Georgian</MenuItem>
      <MenuItem value={'ru'}>Russian</MenuItem>
    </Select>
  </FormControl>
  )

}

export default DropdownLang;
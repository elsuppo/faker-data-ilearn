import { Select, FormControl, MenuItem, Stack } from '@mui/material';

const DropdownLang = ({ lang, handleChange }) => {

  return (
    <Stack alignItems="flex-start">
      Region
      <FormControl>
        <Select
          value={lang}
          name="lang"
          onChange={handleChange}
          style={{ width: '120px' }}
        >
          <MenuItem value={'en'}>USA</MenuItem>
          <MenuItem value={'de'}>Germany</MenuItem>
          <MenuItem value={'es'}>Spain</MenuItem>
          <MenuItem value={'ru'}>Russia</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  )

}

export default DropdownLang;
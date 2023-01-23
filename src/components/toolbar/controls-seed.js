import { Stack, FormControl, FormGroup, TextField, Button } from '@mui/material';

const ControlsSeed = ({seed, setSeed, handleChange}) => {

  const onSetSeed = (event) => {
    event.preventDefault();
    setSeed(Math.floor(Math.random() * 1000000));
  }

  return (
    <Stack alignItems="flex-start">
      Seed
      <FormControl>
        <FormGroup row>
          <TextField
            type="number"
            name="valueSeed"
            style={{ width: '100px' }}
            variant="outlined"
            value={seed}
            onChange={handleChange}
          />
          <Button
            variant="contained" 
            color="primary"
            sx={{marginLeft: 2}}
            onClick={onSetSeed}>Random</Button>
        </FormGroup>
      </FormControl>
    </Stack>
  )
}

export default ControlsSeed;
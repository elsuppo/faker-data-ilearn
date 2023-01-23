import { Stack, FormControl, FormGroup, TextField, Button } from '@mui/material';

const ControlsSeed = ({seed, setSeed, handleChange}) => {

  const onSetSeed = (event) => {
    event.preventDefault();
    setSeed(Math.floor(Math.random() * 1000000));
    console.log(seed);
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
            variant="outlined" 
            color="inherit"
            sx={{marginLeft: 2}}
            onClick={onSetSeed}>Random</Button>
        </FormGroup>
      </FormControl>
    </Stack>
  )
}

export default ControlsSeed;
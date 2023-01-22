import { Stack, FormControl, FormGroup, TextField, Button } from '@mui/material';

const ControlsSeed = () => {

  return (
    <Stack alignItems="flex-start">
      Seed
      <FormControl>
        <FormGroup row>
          <TextField
            name="valueSeed"
            style={{ width: '100px' }}
            variant="outlined"
          />
          <Button 
            variant="outlined" 
            color="inherit"
            sx={{marginLeft: 2}}>Random</Button>
        </FormGroup>
      </FormControl>
    </Stack>
  )
}

export default ControlsSeed;
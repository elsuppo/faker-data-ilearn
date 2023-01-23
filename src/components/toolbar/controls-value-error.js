import { Slider, TextField, Stack } from '@mui/material';

const ControlsValueError = ({ valueError, handleChange }) => {
  return (
    <Stack alignItems="flex-start">
      Error value
      <Stack
        direction="row"
        alignItems="center"
        spacing={2}
      >
        <Slider
          min={0}
          step={0.1}
          max={10}
          name="valueError"
          value={valueError}
          onChange={handleChange}
          valueLabelDisplay="auto"
          style={{ width: '150px' }}
        />

        <TextField
          type="number"
          value={valueError}
          name="valueError"
          onChange={handleChange}
          InputProps={{
            inputProps: {
              max: 1000, min: 0
            }
          }}
          style={{ width: '100px' }}
          variant="outlined"
        />
      </Stack>
    </Stack>
  )
}

export default ControlsValueError;
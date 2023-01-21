import { Slider, TextField } from '@mui/material';

const ControlsValueError = ({valueError, handleChange}) => {
  return (
    <>
      <Slider
        min={0}
        step={0.5}
        max={10}
        name="valueError"
        value={valueError}
        onChange={handleChange}
        valueLabelDisplay="auto"
        style={{ width: '200px' }}
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
    </>

  )
}

export default ControlsValueError;
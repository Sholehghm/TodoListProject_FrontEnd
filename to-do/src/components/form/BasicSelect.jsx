import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function BasicSelect({value,onChange}) {
  
  return (
    <Box sx={{ minWidth: 120, background: 'white' }}>
      <FormControl fullWidth>
        <InputLabel >status</InputLabel>
        <Select
          value={value}
          label="status"
          onChange={onChange}
        >
          <MenuItem value={'to do'}>to do</MenuItem>
          <MenuItem value={'in progress'}>in progress</MenuItem>
          <MenuItem value={'completed'}>completed</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}

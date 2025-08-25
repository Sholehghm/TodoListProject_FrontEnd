import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function BasicDatePicker({value,onChange}) {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
     
        <DatePicker label="date" value={value} onChange={(newValue) =>{onChange(newValue)}} slotProps={{
    textField: {
      className: "w-full bg-white rounded-md", 
    },
  }}/>
     
    </LocalizationProvider>
  );
}

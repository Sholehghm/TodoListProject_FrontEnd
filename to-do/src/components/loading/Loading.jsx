import * as React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function Loading() {
  return (
    <Box className='flex flex-col items-center'>
      <CircularProgress className=' !text-green-500'/>
    </Box>
  );
}

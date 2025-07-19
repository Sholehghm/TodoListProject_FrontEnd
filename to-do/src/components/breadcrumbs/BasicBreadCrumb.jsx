import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

function handleClick(event) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function BasicBreadcrumb({path}) {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb"  separator={<NavigateNextIcon />}>
        <Link underline="hover" color="inherit" href="/">
          todo
        </Link>
        <Typography sx={{ color: 'text.primary' }}>{path}</Typography>
      </Breadcrumbs>
    </div>
  );
}
